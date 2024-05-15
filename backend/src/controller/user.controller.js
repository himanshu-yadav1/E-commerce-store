import { Seller } from "../models/seller.model.js"
import { User } from "../models/user.model.js"
import errorHandler from "../utils/ErrorHandler.js"

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


export{
    registerAsSeller
}