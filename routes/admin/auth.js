const router=require('express').Router();
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const saltRounds=10;
const adminModel=require('../../db/models/adminModel');


//route-> http://localhost:5000/admin/auth/register
/*router.post('/register',async (req,res)=>{
    try{
        const{email,password}=req.body;
        const hash=bcrypt.hashSync(password,saltRounds);
        const newAdmin=new adminModel({email:email,password:hash});
        await newAdmin.save();
        res.send({msg:'admin register successful'})
    }catch(err){
        res.send({err:"server error"});
    }
})*/

//router-> http://localhost:5000/admin/auth/login
router.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const admin=await adminModel.findOne({email:email});
        if(admin && bcrypt.compareSync(password,admin.password)){
            const token=jwt.sign({
                id: admin._id,
            }, 'secret', { expiresIn: '1h' });
            res.send({token:token});
        }else{
            res.send({msg:"invalid credentials"});
        }
    }catch(err){
        res.send({err:"server error"});
    }
});

//route-> http://localhost:5000/admin/auth/verify
router.get('/verify',async(req,res)=>{
    try{
        jwt.verify(req.headers['x-auth-token'],'secret');
        res.send({islogin:true});
    }catch(err){
        res.send({islogin:false});
    }
})





module.exports =router;