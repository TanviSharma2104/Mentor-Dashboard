const mongoose = require('mongoose')
const express = require("express");
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to database!");
}).catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000, http://localhost:3000");
});

app.use((err, req, res, next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});