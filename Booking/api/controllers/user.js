import User from "../models/User.js";  // do not forget to put .js in Nodejs


// UPDATE   
export const updateUser = async (req,res,next) =>{
    try{
        const updateUser = await User.findByIdAndUpdate(
       req.params.id,{$set: req.body},
       {new:true} 
       );
        console.log(updateUser);
        res.status(200).json(updateUser);
   } catch (err){
    next(err)
   }
}

//DELETE   
export const deleteUser = async (req,res,next) =>{
    try {
  
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err){
        next(err)
    }
}
//GET
export const getUser = async (req,res,next) =>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
   } catch (err){
    next(err)
   }
}
//GET ALL UserS  
export const getUsers = async (req,res,next) =>{
    try{
        const users = await User.find(); // for test the error message findById("asdasdadsa");
        res.status(200).json(users);
   } catch (err){
       next(err)
   }
}