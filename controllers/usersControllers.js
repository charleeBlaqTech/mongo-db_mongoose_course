const user = require('../models/userModel');

class User{

    static async index(req,res){
        try {
            const users= await user.find();
            res.status(200).render('', {users})
        } catch (error) {
            res.status(200).json({message: error.message})
        }
    }



    static create(req, res){
        res.status(200).render('registerUser');
    }


    static async store(req,res){
        try {
            const {fullname, email}= req.body
            if(fullname !== null || fullname !== ""){
                await user.create({
                    fullname: fullname.trim().toLowerCase(),
                    email: email.trim().toLowerCase()
                })
                
                res.status(301).redirect('/post/api/v1/read-posts');
            }else{
                res.status(400).json({message: "Post Input Cannot Be empty...."})
            }
           
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async update(req, res){
        try {
            const {id}= req.params;
            if(id !== null || id !== "" ){
                const foundUser = await user.findOne({_id: id});
                res.status(201).render('editPost', {foundUser});
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
                const foundUser = await user.findOne({_id: id});
                foundUser.fullname = updatedText;
                await foundUser.save();
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
                await user.findByIdAndDelete({_id: id});
                res.status(301).redirect('/post/api/v1/read-posts');
            }else{
                res.status(400).json({message: "post id cannot be empty or null...."})
            }
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}



module.exports = User