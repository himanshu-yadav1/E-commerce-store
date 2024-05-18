import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

// router.post('/create', verifyJWT, )
// router.delete('/cancel/:id', verifyJWT, )
// router.post('/getAllOrders/:id', verifyJWT, )
// router.post('/getOrderDetails/:id', verifyJWT, )

export default router