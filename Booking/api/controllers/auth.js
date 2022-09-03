import User from '../models/User.js';
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken";

// CREATE NEW USER / REGISTER WE HAVE CREATE USER HERE SO NO NEED TO CREATE SAME IN USER CONTROLLERS

export const register = async(req,res,next)=>{
    try{
        //To hash a password: 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        });

        await newUser.save()
        res.status(200).send("User has been created")
    }catch(err){
    next(err)
    }
}


//LOGIN FUNCTION

export const login = async(req,res,next)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        //creating custom error below if user not found
        if(!user) return next(createError(404,"User not found!."))

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
            );

        if(!isPasswordCorrect) return next(createError(400,"Wrong Password or username!"))
        // this sends userback the password and isAdmin details to prevent this we will destructure the details of user and send only required details

        // check for useraccess via JWT
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT); // set this token to cookies for that we need to install cookie parser

        const {password, isAdmin, ...otherDetails} = user._doc; 

        res
        .cookie("access_token", token,{
            httponly:true,                  // HTTP-only cookie is less likely to be disclosed to a hacker or a malicious Web site. 
        }) 
        .status(200).json({...otherDetails})
        //res.status(200).json({...otherDetails})
    }catch(err){
    next(err)
    }
}