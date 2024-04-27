import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import errorHandler from "../utils/ErrorHandler.js"
import jwt from 'jsonwebtoken'


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

const signIn = async (req, res, next) => {
    try {
        const {username, email, password} = req.body
    
        if(!username && !email){
            return next(errorHandler(400, "Enter username or email"))
        }
    
        let userFound
        if(username){
            userFound = await User.findOne({username})
            if(!userFound){
                return next(errorHandler(404, "No account found with this username"))
            }
        }
        else{
            userFound = await User.findOne({email})
            if(!userFound){
                return next(errorHandler(404, "No account found with this email"))
            }
        }

        const isPasswordCorrect = await bcrypt.compare(password, userFound.password)

        if(!isPasswordCorrect){
            return next(errorHandler(400, "Invalid Credentials"))
        }

        const user = await User.findById(userFound._id).select("-password")

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res
        .status(200)
        .cookie('access_token', token, { httpOnly: true})
        .json({user, message: "Login successfull"})

    } catch (error) {
        next(error)
    }
}

const signOut = async (req, res, next) => {
    try {
        res
        .status(200)
        .clearCookie('access_token')
        .json({message: "sign out successfull"})
        
    } catch (error) {
        next(error)
    }
}

export {
    signUp,
    signIn,
    signOut
}