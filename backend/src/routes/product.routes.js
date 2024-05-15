import { Router } from "express";
import { addProduct } from "../controller/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.post('/add', verifyJWT, addProduct)

export default router