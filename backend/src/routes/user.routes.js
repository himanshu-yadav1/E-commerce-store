import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { registerAsSeller, updateUser } from "../controller/user.controller.js";

const router = Router()

router.post('/registerAsSeller', verifyJWT, registerAsSeller)
router.post('/update/:id', verifyJWT, updateUser)

export default router