const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User =require("../model/users")
router.get('/',(req,res)=>{
    res.send(`hello world`);
});
//router.post('/register',(req,res)=>{
  //  const {name,password}=req.body;
    //if(!name || !password){
    //    return res.status(422).json({error:"please fill the fields properly"})

    //}
   // User.findOne({name:name})
   //   .then((userExist)=>{
    //    if(userExist){
    //        return res.status(422).json({error:"name already exists"})
    //    }
      
  //    const user=new User({name,password});
  //    user.save().then(()=>{
  //      res.status(201).json({message:"user registered successfully"})
  //    }).catch((err)=> res.status(500).json({error:"failed to register"}));
   // }).catch(err=>{console.log(err);});
//});
router.post('/register',async (req,res)=>{
    console.log("post")
    const {name,password}=req.body;
      if(!name || !password){
        return res.status(422).json({error:"please fill the fields properly"})}
     try{
        const userExist= await User.findOne({name:name})
        if(userExist){
            return res.status(422).json({error:"name already exists"})
       }
       const user=new User({name,password});
       const userRegister= await user.save();
       if(userRegister){
        res.status(201).json({message:"user registered successfully"})
       } else{
        res.status(500).json({error:"failed to register"});
       }
             
     }catch(err){
        console.log(err)
     }

})
router.post("/signin", async(req,res)=>{
    try{
        let token;
        const { name,password}=req.body;
        if(!name || !password){
            return
        }
        const userLogin=await User.findOne({ name:name});
        if(userLogin){
        const isMatch=await bcrypt.compare(password,userLogin.password);
        token=await userLogin.generateAuthToken();
        console.log(token)
        res.cookie("_xsrf",token,{
            expires: new Date(Date.now()+25892000000),
            httpOnly:true
        })
        if(!isMatch){
            res.status(400).json({eroor:"Invalid credentials pass"})
        }else{
            res.json({message:"user signin successfully"})
        }}else{
            res.status(400).json({eroor:"Invalid credentials"})
        }
        
    }catch(err){
        console.log(err);
    }
})
module.exports=router;