const express = require("express");
const path = require("path");
const hbs =require('hbs')
const app = express();
const port =process.env.PORT || 8000;

// public static path

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.set('view engine' , 'hbs');
app.set('views',template_path)
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// Routing
app.get("/" , (req,res) =>{
    res.render("index")
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