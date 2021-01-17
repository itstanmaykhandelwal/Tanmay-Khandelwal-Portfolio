const express = require("express");
const path = require("path");
require("./db/conn")
const User = require("./models/data");
const hbs =require('hbs')


const app = express();
const port =process.env.PORT || 8000;

// public static path

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.urlencoded({extended:false}))
app.set('view engine' , 'hbs');
app.set('views',template_path)
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

// Routing
app.get("/" , (req,res) =>{
    res.render("index")
})

app.post("/contact", async(req,res) =>{
    try{
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch(err){
        res.status(500).send(error);
    }
})
app.get("*", (req,res) =>{
    res.render("404error",{
        errorMsg: "OOps! Page Not Found"
    })
})

// Port No
app.listen(port, () =>{
    console.log(`Listing to the port at ${port}`)
})