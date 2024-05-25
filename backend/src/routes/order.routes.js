import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import cancelOrder from "../controller/order.controller.js";

const router = Router()

// router.post('/create', verifyJWT, )
router.put('/cancel/:id', verifyJWT, cancelOrder)
// router.post('/getAllOrders/:id', verifyJWT, )
// router.post('/getOrderDetails/:id', verifyJWT, )

export default router