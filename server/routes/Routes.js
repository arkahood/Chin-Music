const express = require('express');
const Route = express.Router();


//To able To use JSON Format
express().use(express.json());


Route.get("/",(req,res)=>{
    try {
        res.send("ok done");
    } catch (error) {
        console.log("Error is ocuured");
    }
    
})

//Login Route
Route.post("/login",(req,res)=>{
    console.log(req.body);
    res.status(200).send({messege:"all ok"});
})


module.exports = Route;