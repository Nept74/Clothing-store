const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();

mongoose.connect('mongodb://localhost:27017/itmo_shop').then(()=>{
   console.log('База данных подключена')
})

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(3000, ()=>{
    console.log('Сервер работает');
})