import mongoose from 'mongoose';
/* const { Schema } = mongoose; */  // No need for this line for schema as we are using this way >  const HotelSchema = new mangoose.Schema({

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },

}, {timestamps: true}
);

export default mongoose.model("User",UserSchema);