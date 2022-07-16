const router=require('express').Router();
const companyModel = require('../../db/models/companyModel');
const modelnameModel = require('../../db/models/modelnameModel');
const auth= require('../../middlewar/userauth');


//router-> http://localhost:5000/user/getproduct/models?cname=comp name&model=model name
router.get('/models',auth,async(req,res)=>{
    try{
        let data=[];
        if(req.query.cname&&req.query.model){
            data=await modelnameModel.findOne({name:req.query.model,company:req.query.cname});
        }else if(req.query.cname){
            data=await modelnameModel.find({company:req.query.cname});
        }else{
            data=await modelnameModel.find();
        }
        res.send(data);
         
    }catch(err){
        res.send({err:'server err'});
    }
})

//router-> http://localhost:5000/user/getproduct/allcomp
router.get('/allcomp',auth,async(req,res)=>{
    try{
        const data=await companyModel.find();
        res.send(data);
         
    }catch(err){
        res.send({err:'server err'});
    }
})

module.exports =router;