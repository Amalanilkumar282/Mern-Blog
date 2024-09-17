const express=require('express');
const cors= require('cors');
const mongoose = require("mongoose");
const User= require('./model/User');
const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://amalanilkumaredu:Amal1234@cluster0.iyjwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register',async (req,res) => {
    const {username,password}=req.body;
    console.log(username);
   const userDoc=await User.create({username,password});
    res.json({requestData:{username,password}});
    
});

app.listen(4000);
