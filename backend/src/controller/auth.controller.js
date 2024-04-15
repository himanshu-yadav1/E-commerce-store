import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import errorHandler from "../utils/ErrorHandler.js"


const signUp = async (req, res, next) => {
    try {
        const {name, username, email, password} = req.body
    
        if(!name || !username || !email || !password){
            return next(errorHandler(403, "Enter all details"))
        }
    
        const usernameAlreadyUsed = await User.findOne({username})
        const emailAlreadyUsed = await User.findOne({email})

        if(usernameAlreadyUsed && emailAlreadyUsed){
            return next(errorHandler(400, "Account already exists with this email and username"))
        }
        else if(usernameAlreadyUsed){
            return next(errorHandler(400, "Account already exists with this username"))
        }
        else if(emailAlreadyUsed){
            return next(errorHandler(400, "Account already exists with this email"))
        }
        
    
        const hashedPassword = await bcrypt.hash(password, 10)
    
        const userCreated = await User.create({name, username, email, password: hashedPassword})
    
        const user = await User.findById(userCreated._id).select("-password")
    
    
        res
        .status(200)
        .json({user, message: "Account created successfully"})

    } catch (error) {
        next(error)
    }

}

export {
    signUp
}