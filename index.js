// const express=  require('express');
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import dotenv from "dotenv"
import dbConnect from './utils/db.js';
import userRoute from './routes/user.routes.js'
import companyRoute from './routes/company.routes.js'
import jobRoute from './routes/job.routes.js'
import applicationRoute from './routes/application.routes.js'

dotenv.config({});

const app = express();

app.get("/home",(req,res)=>{
    return res.status(400).json({
        message:"I am frontend",
        success :true
    })

})

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions ={
    origin:'https//localhost:5173',
    credential :true
}
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests only from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Include credentials like cookies if needed
  }));
  

const PORT = process.env.Port || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.listen(PORT, () =>{
    dbConnect()
    console.log(`Server running att port ${PORT}`)
})
