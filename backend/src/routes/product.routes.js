import { Router } from "express";
import { addProduct } from "../controller/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.post('/add', verifyJWT, addProduct)
// router.post('/update/:id', verifyJWT, )
// router.post('/delete/:id', verifyJWT, )
// router.post('/view/:id', )

export default router