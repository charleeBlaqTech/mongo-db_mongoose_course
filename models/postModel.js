const mongoose=require('mongoose')


const postSchema=new mongoose.Schema({
    text: {
        type:String,
        require: true
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    created:{
        type: Date,
        default: Date.now()
    }
})




const post= new mongoose.model('post', postSchema)
module.exports=post