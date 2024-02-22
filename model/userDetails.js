const mongoose=require("mongoose");
const jwt=require('jsonwebtoken');

const userDetail=mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }
    ,
    mail:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
       
    }
})





const User=mongoose.model("user",userDetail);

module.exports=User