import express from "express"
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js"; 
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

/* router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello user, You are logged in !")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("Hello user, You are logged in and can delete your account !")
})


router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello admin, You are logged in and can delete all accounts !")
}) */



//UPADTE
router.put("/:id", verifyUser, updateUser);


//DELETE

router.delete("/:id", verifyUser, deleteUser);

//GET

router.get("/:id", verifyUser, getUser);

//GET ALL

router.get("/", verifyAdmin, getUsers); 

export default router


