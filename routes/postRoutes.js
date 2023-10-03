const express = require('express');
const router = express.Router();
const Post = require('../controllers/postControllers')





router.get('/api/v1/read-posts', Post.index);
router.route('/api/v1/create-post').post(Post.store).get(Post.create);

router.route('/api/v1/update-post/:id').get(Post.update).post(Post.patch);
router.get('/api/v1/delete-post/:id', Post.destroy)



module.exports= router;