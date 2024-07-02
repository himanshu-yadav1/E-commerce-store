import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import errorHandler from "../utils/ErrorHandler.js";


const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res
            .status(200)
            .json(users);
    } catch (error) {
        return next(error);
    }
}

const getAllSellers = async (req, res, next) => {
    try {
        const sellers = await User.find({ isSeller: true });
        res
            .status(200)
            .json(sellers);
    } catch (error) {
        return next(error);
    }
}

const updateOrderToDelivered = async (req, res, next) => {
    try {
        const orderId = req.params.id;

        const order = await Order.findById(orderId)

        if (!order) {
            return next(errorHandler(404, "Order not found"));
        }

        if(order.status === 'CANCELLED'){
            return next(errorHandler(403, "Can't update: Order is cancelled"));
        }

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            {
                status: 'DELIVERED',
                deliveredAt: Date.now()
            },
            { new: true }
        );

        if (updatedOrder) {
            res.status(200).json(updatedOrder);
        }
    } catch (error) {
        return next(error);
    }
}

export { getAllUsers, getAllSellers, updateOrderToDelivered };