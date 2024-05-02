import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getDetails } from "../controller/seller.controller.js";

const router = Router()

router.get('/getDetails', verifyJWT, getDetails)

export default router