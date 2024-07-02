import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import cancelOrder from "../controller/order.controller.js";
import createOrder from "../controller/order.controller.js";
import getAllOrders from "../controller/order.controller";
import getOrderDetails from "../controller/order.controller";

const router = Router();

router.post("/create", createOrder);
router.put("/cancel/:id", verifyJWT, cancelOrder);
router.post("/getAllOrders/:id", verifyJWT, getAllOrders);
router.post("/getOrderDetails/:id", verifyJWT, getOrderDetails);

export default router;
