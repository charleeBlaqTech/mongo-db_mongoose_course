const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
})



const userModel= new mongoose.model('user', userSchema);

module.exports=userModel