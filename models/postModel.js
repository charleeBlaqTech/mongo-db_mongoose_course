const mongoose=require('mongoose')


const postSchema=new mongoose.Schema({
    text: String,
})




const post= new mongoose.model('post', postSchema)
module.exports=post