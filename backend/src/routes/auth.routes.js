import { Router } from "express";
import { signIn, signOut, signUp } from "../controller/auth.controller.js";

const router = Router()

router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/signout', signOut)

export default router