const router=require('express').Router();
const userModel = require('../../db/models/userModel');
const auth= require('../../middlewar/adminauth')

//router-> http://localhost:5000/admin/getuser/
router.get('/',auth,async(req,res)=>{
    try{
        
        const data=await userModel.find();
        
        res.send(data);
         
    }catch(err){
        res.send({err:'server err'});
    }
})


module.exports =router;