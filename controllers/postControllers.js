const post = require('../models/postModel');

class Post{

    static async index(req,res){
        try {
            const posts= await post.find();
            res.status(200).render('posts', {posts})
        } catch (error) {
            res.status(200).json({message: error.message})
        }
    }



    static create(req, res){
        res.status(200).render('createPost');
    }


    static async store(req,res){
        try {
            const {text}= req.body
            if(text !== null || text !== "" ){
                await post.create({
                    text: text.trim().toLowerCase()
                })
                res.status(301).redirect('/post/api/v1/read-posts');
            }else{
                res.status(400).json({message: "Post Input Cannot Be empty...."})
            }
           
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    
    static async show(req,res){
        try {
            const {id} = req.params;

            if(id !== null || id !== "" ){
                const singlePost= await post.findOne({
                    _id:id
                }).populate("author")
                res.status(200).render('showPost', {singlePost});
            }else{
                res.status(400).json({message: "post not found...."})
            }
           
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async update(req, res){
        try {
            const {id}= req.params;
            if(id !== null || id !== "" ){
                const foundPost = await post.findOne({_id: id});
                res.status(201).render('editPost', {foundPost});
            }else{
                res.status(400).json({message: "post id cannot be empty or null...."})
            }
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }


    static async patch(req, res){
        try {
            const {id}= req.params;
            const {updatedText}= req.body;
            if((id !== null || id !== "") && (updatedText !== null || updatedText !== "") ){
                const foundPost = await post.findOne({_id: id});
                foundPost.text = updatedText;
                await foundPost.save();
                res.status(301).redirect('/post/api/v1/read-posts');
            }else{
                res.status(400).json({message: "Post Input Cannot Be empty...."})
            }
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    
    static async destroy(req, res){
        try {
            const {id}= req.params;
            if(id !== null || id !== "" ){
                await post.findByIdAndDelete({_id: id});
                res.status(301).redirect('/post/api/v1/read-posts');
            }else{
                res.status(400).json({message: "post id cannot be empty or null...."})
            }
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}



module.exports = Post