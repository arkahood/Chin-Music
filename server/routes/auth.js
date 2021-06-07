const express = require('express');

const auth = function(req,res,next){
    console.log("in my auth");
    // res.send("done no further");
    next();
}

module.export = auth;