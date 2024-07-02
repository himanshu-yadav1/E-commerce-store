import { Router } from "express";
import { getAllSellers, getAllUsers, updateOrderToDelivered } from "../controller/admin.controller.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";

const router = Router()

router.post('/getAllUsers', verifyAdmin, getAllUsers)
router.post('/getAllSellers', verifyAdmin, getAllSellers)
// router.post('/approveSeller', )
router.put('/updateOrderToDelivered/:id', verifyAdmin, updateOrderToDelivered)

export default router