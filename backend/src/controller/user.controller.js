import { Seller } from "../models/seller.model.js"
import { User } from "../models/user.model.js"
import errorHandler from "../utils/ErrorHandler.js"

const registerAsSeller = async(req, res, next) => {
    try {
        const userId = req.user.id
        const { storeName } = req.body

        const user = await User.findById(userId)
        if(user.isSeller){
            return next(errorHandler(400, "You are already a seller"))
        }
        
        const seller = await Seller.create({userId, storeName})
        if(!seller){
            return next(errorHandler(500, "Internal server error"))
        }
        
        await User.findByIdAndUpdate(userId, {isSeller: true})


        res
        .status(200)
        .json({seller, message: "Registered as selller Successfully"})


    } catch (error) {
        return next(error)
    }
    
}


export{
    registerAsSeller
}