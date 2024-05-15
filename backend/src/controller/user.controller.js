import { Seller } from "../models/seller.model.js"
import { User } from "../models/user.model.js"
import errorHandler from "../utils/ErrorHandler.js"
import bcrypt from 'bcryptjs'

const registerAsSeller = async(req, res, next) => {
    try {
        const token = req.user.id
        const { storeName, userId } = req.body 
        if(!userId || token != userId){
            return next(errorHandler(400, "Unauthorized access, Login to continue"))
        }

        if(!storeName){
            return next(errorHandler(404, "Store name is required"))
        }
        
        const userFound = await User.findById(userId)
        if(userFound.isSeller){
            return next(errorHandler(400, "You are already a seller"))
        }

        const storeNameAlreadyUsed = await Seller.findOne({storeName})
        if(storeNameAlreadyUsed){
            return next(errorHandler(400, "Store with this name already exits."))
        }
        
        const seller = await Seller.create({userId, storeName})
        if(!seller){
            return next(errorHandler(500, "Internal server error"))
        }
        
        await User.findByIdAndUpdate(userId, {isSeller: true})

        const user = await User.findById(userId)
        console.log(user)

        res
        .status(200)
        .json({seller, user, message: "Registered as seller Successfully"})


    } catch (error) {
        return next(error)
    }
    
}

const updateUser = async(req, res, next) => {
    try {
        const userId = req.user.id
        if(req.params.id != userId){
            return next(errorHandler(404, "Unauthorized access"))
        }

        const { updatedName, updatedUsername, updatedEmail, updatedPassword } = req.body

        let updateFields = {};

        if(updatedName && updatedName != '' && updatedName != ' '){
            updateFields.name = updatedName
        }

        if(updatedUsername && updatedUsername != '' && updatedUsername != ' '){
            const usernameUsed = await User.findOne({username: updatedUsername})
            if(usernameUsed){
                return next(errorHandler(405, "Username already used"))
            }

            updateFields.username = updatedUsername
        }

        if(updatedEmail && updatedEmail != '' && updatedEmail != ' '){
            const emailUsed = await User.findOne({email: updatedEmail})
            if(emailUsed){
                return next(errorHandler(405, "Email already used"))
            }

            updateFields.email = updatedEmail
        }

        if(updatedPassword && updatedPassword != '' && updatedPassword != ' '){
            const hashedPassword = await bcrypt.hash(updatedPassword, 10)
            updateFields.password = hashedPassword
        }


        const updatedUser = await User.findByIdAndUpdate(userId, {
            $set:{ ...updateFields }

        }, {new: true})

        const user = await User.findById(updatedUser._id).select("-password")

        res
        .status(200)
        .json({user, message: "Information updated successfully"})
        

    } catch (error) {
        return next(error)
    }
}


export{
    registerAsSeller,
    updateUser
}