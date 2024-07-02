import express from 'express'
import connectDB from './db/index.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import dotenv from 'dotenv'
dotenv.config()

import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import sellerRouter from './routes/seller.routes.js'
import productRouter from './routes/product.routes.js'
import adminRouter from './routes/admin.routes.js'
import orderRouter from './routes/order.routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/seller', sellerRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/order', orderRouter)


app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500
    const message = error.message || "Internal server error"

    return res
        .status(statusCode)
        .json(
            {
                success: false,
                statusCode,
                message
            }
        )
})

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`listing on http://localhost:${process.env.PORT}`)
    })
})

