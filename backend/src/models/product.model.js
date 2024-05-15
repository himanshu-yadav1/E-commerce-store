import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.ObjectId,
      ref: "Seller",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    offer: {
      type: Boolean,
      required: true,
      default: false
    },
    discountedPrice: {
      type: Number,
      default: null
    },
    category: {
      type: String,
      required: true,
      default: "others"
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    productImages: {
      type: Array,
      required: true
    },
    reviews: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String
        },
      },
    ],
  }, {timestamps: true}
)

export const Product = mongoose.model('Product', productSchema)