const mongoose=require('mongoose');

const modelnameSchema=new mongoose.Schema({
    name:String,
    fixedp:Boolean,
    company:String,
    rates:[{type:String}]
})

module.exports =  mongoose.model('Model',modelnameSchema);