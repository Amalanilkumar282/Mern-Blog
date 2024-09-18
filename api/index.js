const express=require('express');
const cors= require('cors');
const mongoose = require("mongoose");
const User= require('./models/User');
const bcrypt= require('bcryptjs');
const app=express();
const jwt= require('jsonwebtoken');
const cookieParser= require('cookie-parser');

const salt=bcrypt.genSaltSync(10);
const secret='kjfhskdjfhsfhlskdfmv';

 app.use(cors({credentials:true,origin:'http://localhost:3000'}));
 app.use(express.json());
 app.use(cookieParser());



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
    try{
    const userDoc=await User.create({
        username,
        password:bcrypt.hashSync(password,salt),
    });
     res.json({requestData:{username,password}});
    } catch(e){
        res.status(400).json(e);
    }
    
 });


app.post('/login',async (req,res)=>{
    const {username,password}=req.body;
    const userDoc=await User.findOne({username});
    const passOk=bcrypt.compareSync(password,userDoc.password);
    if (passOk){
        //logged in
        jwt.sign({username,id:userDoc._id},secret, {}, (err,token)=>{
            if (err) throw err;
            res.cookie('token',token).json('ok');

        });
    }else{
        res.status(400).json('wrong credentials');
    }
})

app.get('/profile',(req,res)=>{
    const {token}=req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
        if (err) throw err;
        res.json(info);
    });
})

app.listen(4000);
