import { Router } from "express";
import { addProduct, productDetails } from "../controller/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.post('/add', verifyJWT, addProduct)
// router.post('/update/:id', verifyJWT, )
// router.delete('/delete/:id', verifyJWT, )
router.get('/productDetails/:id', productDetails)

export default router