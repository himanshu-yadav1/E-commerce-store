import { isValidObjectId } from "mongoose"
import { Seller } from "../models/seller.model.js"
import errorHandler from "../utils/ErrorHandler.js"

const getDetails = async (req, res, next) => {
    try {
        const { sellerId } = req.body

        if(!isValidObjectId(sellerId)){
            return next(errorHandler(400, "Invalid seller id"))
        }

        const seller = await Seller.findById(sellerId).populate('listedProducts')
        if(!seller){
            return next(errorHandler(404, "Seller data not found"))
        }

        res
        .status(200)
        .send(seller)

        
    } catch (error) {
        next(error)
    }
}


export {
    getDetails
}