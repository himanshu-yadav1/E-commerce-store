import { isValidObjectId } from "mongoose";
import errorHandler from "../utils/ErrorHandler";
import { Order } from "../models/order.model";

const cancelOrder = async (req, res, next) => {
    try {
        const orderId = req.params.id;

        if (!isValidObjectId(orderId)) {
            return next(errorHandler(400, "Order Id is not valid"));
        }

        const order = await Order.findById(orderId);

        if (!order) {
            return next(errorHandler(404, "Order not found"));
        }

        if (order.status === 'CANCELLED') {
            return next(errorHandler(400, "Order already cancelled"));
        }

        // Check if the user is authorized to cancel the order

        await Order.findByIdAndUpdate(orderId, { status: 'CANCELLED' });

        res
        .status(200)
        .json({ message: "Order cancelled" });

    } catch (error) {
        next(error);
    }
}

export default cancelOrder;
