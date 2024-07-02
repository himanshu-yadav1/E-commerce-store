import { isValidObjectId } from "mongoose";
import errorHandler from "../utils/ErrorHandler.js";
import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import { Product } from "../models/product.model.js";

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

    if (order.status === "CANCELLED") {
      return next(errorHandler(400, "Order already cancelled"));
    }

    // Check if the user is authorized to cancel the order

    await Order.findByIdAndUpdate(orderId, { status: "CANCELLED" });

    res.status(200).json({ message: "Order cancelled" });
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  const { buyerId, address, orderItems, orderPrice, paymentMethod } = req.body;
  try {
    const buyer = await User.findById(buyerId);
    if (!buyer) {
      return next(errorHandler(404, "Invalid Buyer ID"));
    }
    for (let item of orderItems) {
      const prdt = await Product.findById(item?.productId);
      if (!prdt) {
        return next(errorHandler(404, `Invalid Buyer ID ${item?.productId}`));
      }
    }
    const newOrder = new Order({
      buyerId,
      address,
      orderItems,
      orderPrice,
      paymentMethod,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: "Order Created Succesfully!",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const getAllOrders = await Order.find({});
    res.status(200).json(getAllOrders);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getOrderDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    const findOrder = await Order.findById(id);
    if (!findOrder) {
      return next(errorHandler(404, "Order Not Found!"));
    }
    return res.status(200).json({ findOrder });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export  { cancelOrder, createOrder, getAllOrders, getOrderDetails}
