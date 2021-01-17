const mongoose = require("mongoose");

// create database
mongoose.connect("mongodb://localhost:27017/Portfolio",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log("Connection Successfull")
}).catch((err) =>{
    console.log(err)
})