const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// List users
router.get('/', userController.getUsers);

// Register and login
router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

// Add more routes for getting user, updating user, etc.

module.exports = router;