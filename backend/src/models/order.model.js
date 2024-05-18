import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        sellerId: {
            type: mongoose.Schema.ObjectId,
            ref: "Seller",
            required: true
        },
        buyerId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        address: {
            type: String,
            required: true
        },
        orderItems: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                },
                quantity: {
                    type: Number,
                    required: true,
                }
            }
        ],
        orderPrice: {
            type: Number,
            required: true,
        },
        paymentMethod: {
            type: String,
            enum: ['CASH', 'CREDIT CARD', 'DEBIT CARD', 'UPI'],
            required: true
        },
        status: {
            type: String,
            emum: ['PENDING', 'CANCELLED', 'DELIVERED'],
            default: 'PENDING',
        },        

    },{timestamps: true}
)

export const Order = mongoose.model('Order', orderSchema)

