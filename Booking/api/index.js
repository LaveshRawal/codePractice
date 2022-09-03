import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js" 
import cookieParser from "cookie-parser";  

const app = express()
dotenv.config()

// initial connection to MangoDB
const connect = async()=>{
try {
    mongoose.connect(process.env.MONGO);
    console.log(process.env.MONGO);
    console.log("connected to mangodb");
  } catch (error) {
    throw(error);
  }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

//middlewares
app.use(cookieParser())
app.use(express.json()); // What Does `app.use(express.json())` Do in Express?
//The app.use() function adds a new middleware to the app. Essentially, whenever a request hits your backend, Express will execute the functions you passed to app.use()  

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// Error Handling middleware

app.use((err,req,res,next)=>{  // next is a callback function here if error occurs on any API request on any root we will handle this error we must pass all 4 parameters otherwise it will not work
const errorStatus = err.status || 500 ;
const errorMessage = err.message || "Something went Wrong";
return res.status(errorStatus).json({
  success:false,
  status:errorStatus,
  message:errorMessage,
  stack:err.stack,
})

})

app.listen(8800,()=>{
    connect()
   
    console.log("connected to backend with Nodemon wathcher")
})

