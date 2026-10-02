import mongoose, { connect }  from "mongoose";
import { app } from "./app.js";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config();

console.log("Mongo URL:", process.env.MONGODB_URL);
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at the port:,${process.env.PORT}`);
        
    });
})
.catch((err)=>{
    console.log("MongoDB connection failed");
    
});


/*
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERRR:",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listing on the port ${process.env.PORT}`);
            
        })
    }catch(error){
        console.error("ERROR:",error)
    }
})()

*/
