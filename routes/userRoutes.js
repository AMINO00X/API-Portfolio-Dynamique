const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET user profile
router.get('/', userController.getUserProfile);

// PUT to update user profile
router.put('/', userController.updateUserProfile);

router.post('/', userController.createUser);


module.exports = router;
