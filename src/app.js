const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()
const product = require("./models/productModel")
const port = process.env.PORT
const db = require("./db/conn")

const productRoutes = require("./routes/productRoutes")

app.use(express.json())

app.use('/api' , productRoutes)




app.listen(port , ()=>{
    console.log("server is running at port" , port);
    
})