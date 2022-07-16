const router=require('express').Router();
const companyModel = require('../../db/models/companyModel');
const modelnameModel = require('../../db/models/modelnameModel');
const auth= require('../../middlewar/adminauth')

//router-> http://localhost:5000/admin/product/addcompany
router.post('/addcompany',auth,async(req,res)=>{
    try{
        const {name} = req.body;
        const newCompany =new companyModel({name: name});
        await newCompany.save();
        res.send({msg: 'Company saved successfully'})
    }catch(err){
        res.send({err:'server err'});
    }
})

//router-> http://localhost:5000/admin/product/addmodel/:id of company
router.post('/addmodel/:id',auth,async(req,res)=>{
    try{
        const {name,fixedp,rates} = req.body;
        const cid=req.params.id;
        const c=await companyModel.findById(cid);
        const newModel =new modelnameModel({name: name,fixedp:fixedp,rates:rates,company:c.name});
        await newModel.save();
        res.send({msg: 'model saved successfully'})
    }catch(err){
        res.send({err:'server err'});
    }
})

//router-> http://localhost:5000/admin/product/models?cname=comp name&model=model name
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

//router-> http://localhost:5000/admin/product/allcomp
router.get('/allcomp',auth,async(req,res)=>{
    try{
        const data=await companyModel.find();
        res.send(data);
         
    }catch(err){
        res.send({err:'server err'});
    }
})

module.exports =router;