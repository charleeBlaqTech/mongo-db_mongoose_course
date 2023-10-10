const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String
    },
    userType:{
        type: String,
        default: creator
    },
    posts:[],
    created:{
        type: Date,
        default: Date.now()
    }
})



const userModel= new mongoose.model('user', userSchema);

module.exports=userModel