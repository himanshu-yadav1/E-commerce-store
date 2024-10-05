import { isValidObjectId } from "mongoose";
import { Product } from "../models/product.model.js";
import { Seller } from "../models/seller.model.js";
import errorHandler from "../utils/ErrorHandler.js";

const addProduct = async (req, res, next) => {
  const {
    title,
    description,
    price,
    offer,
    discountedPrice,
    category,
    subCategory,
    stock,
    productImages,
  } = req.body;

  if (!title || !description || !price || !category || !subCategory || !stock) {
    return next(errorHandler(400, "Enter all details to add the product"));
  }

  if (productImages.length === 0) {
    return next(errorHandler(400, "Upload atleast one image"))
  }

  if (offer) {
    if (!discountedPrice) {
      return next(errorHandler(400, "Enter discounted price"))
    }
    if (discountedPrice > price) {
      return next(errorHandler(400, "Discounted price cannot be greater than original price"))
    }
  }

  const seller = await Seller.findOne({ userId: req.user.id });
  if (!seller) {
    return next(errorHandler(404, "Seller not found."));
  }
  const sellerId = seller._id;


  const productData = {
    sellerId,
    title,
    description,
    price,
    offer,
    category,
    subCategory,
    stock,
    productImages,
  };
  if (offer) {
    productData.discountedPrice = discountedPrice;
  }

  const product = await Product.create(productData);

  if (!product) {
    return next(
      errorHandler(500, "Failed to add the product. Please try again later.")
    );
  }

  await Seller.findByIdAndUpdate(sellerId, {
    $push: { listedProducts: product._id },
  });

  res.status(200).json({ product, message: "Product added Successfully" });
};

const productDetails = async (req, res, next) => {
  try {
    const productId = req.params.id;

    if (!isValidObjectId(productId)) {
      return next(errorHandler(400, "Invalid product ID"));
    }

    const product = await Product.findById(productId);
    if (!product) {
      return next(errorHandler(404, "Product not found"));
    }

    res.status(200).send(product);
  } catch (error) {
    return next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    if (!isValidObjectId(productId)) {
      return next(errorHandler(400, "Invalid product ID"));
    }

    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(200).send(product);
  } catch (error) {
    return next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    if (!isValidObjectId(productId)) {
      return next(errorHandler(400, "Invalid product ID"));
    }

    const product = await Product.findById(productId)
    if (!product) {
      return next(errorHandler(404, "Product not found"));
    }

    await Product.findByIdAndDelete(productId);
    res.status(200).send({
      message: "Product Deleted Succesfully!",
    });
  } catch (error) {
    return next(error);
  }
};

export { addProduct, productDetails, deleteProduct, updateProduct };
