import { Product } from "../models/product.model.js"
import { Seller } from "../models/seller.model.js"
import errorHandler from "../utils/ErrorHandler.js"

const addProduct = async (req, res, next) => {
    const {
        sellerId,
        title,
        description,
        price,
        offer,
        discountedPrice,
        category,
        stock,
        productImages,
    } = req.body


    if(!sellerId || !title || !description || !price || !offer || !category || !stock || !productImages){
        return next(errorHandler(400, "Enter all details to add the product"))
    }

    const seller = await Seller.findById(sellerId)
    if (!seller) {
        return next(errorHandler(404, "Seller not found."));
    }

    const product = await Product.create(
        {
            sellerId,
            title,
            description,
            price,
            offer,
            discountedPrice,
            category,
            stock,
            productImages,
        }
    )

    if(!product){
        return next(errorHandler(500, "Failed to add the product. Please try again later."))
    }

    
    await Seller.findByIdAndUpdate(sellerId, { $push: { listedProducts: product._id } })

    res
    .status(200)
    .json({product, message: "Product added Successfully"})
}

export {
    addProduct
}