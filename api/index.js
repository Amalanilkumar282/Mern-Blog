const express=require('express');
const cors= require('cors');
const mongoose = require("mongoose");
const User= require('./models/User');
const app=express();

 app.use(cors());
 app.use(express.json());

 mongoose.connect('mongodb+srv://amalanilkumaredu:Amal1234@cluster0.iyjwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
        serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
        //bufferCommands: false,
      }).then(() => {
        console.log('Connected to MongoDB Atlas');
      }).catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
      });

 app.post('/register',async (req,res) => {
     const {username,password}=req.body;
     //console.log(username);
    //console.log(password);
    const userDoc=await User.create({username,password});
     res.json({requestData:{username,password}});
    
 });


app.get('/register',(req,res)=>{
    res.json('test ok');
});

app.listen(4000);
