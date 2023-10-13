const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    userType:{
        type: String,
        default: "creator"
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }],
    created:{
        type: Date,
        default: Date.now()
    }
})



const userModel= new mongoose.model('user', userSchema);

module.exports=userModel