import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { cancelOrder } from "../controller/order.controller.js";
import { createOrder } from "../controller/order.controller.js";
import { getAllOrders } from "../controller/order.controller.js";
import { getOrderDetails } from "../controller/order.controller.js";

const router = Router();

router.post("/create", verifyJWT, createOrder);
router.put("/cancel/:id", verifyJWT, cancelOrder);
router.post("/getAllOrders", verifyJWT, getAllOrders);
router.post("/getOrderDetails/:id", verifyJWT, getOrderDetails);

export default router;
