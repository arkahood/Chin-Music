const express = require('express')
const app = express();


app.use(express.json());

const api = require("./routes/Routes.js");
app.use('/api',api);

//Connecting To DATABASE
const DB = "mongodb+srv://arka:arka@cluster0.uzjos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoose = require('mongoose');

mongoose.connect(DB,{
  useNewUrlParser :true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
}).then(()=>{
  console.log("Connection to the database is ok");
}).catch((err)=>console.log("Connection to the database is  NOT ok"));




app.listen(3100,()=>{
    console.log("Server is running at port 3100");
})