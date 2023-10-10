const express = require('express');
const router = express.Router();
const User = require("../controllers/usersControllers");





router.get('/api/v1/read-users', User.index);
router.route('/api/v1/create-user').post(User.store).get(User.create);

router.route('/api/v1/update-user/:id').get(User.update).post(User.patch);
router.get('/api/v1/delete-user/:id', User.destroy)



module.exports= router;