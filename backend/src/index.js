import express from 'express'
import connectDB from './db/index.js'

import dotenv from 'dotenv'
dotenv.config()


const app = express()

app.get('/', (req, res)=> {
    res.send("test")
})

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`listing on http://localhost:${process.env.PORT}`)
    })
})

