const express = require("express");
const path = require("path")
const app = express();
const port =process.env.PORT || 8000;

// public static path

const static_path = path.join(__dirname,"../public")

app.use(express.static(static_path));

// Routing
app.get("/" , (req,res) =>{
    res.send("index")
})
app.get("*", (req,res) =>{
    res.send("404error")
})

// Port No
app.listen(port, () =>{
    console.log(`Listing to the port at ${port}`)
})