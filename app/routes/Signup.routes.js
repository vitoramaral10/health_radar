// Signup routes
const express = require('express');
const router = express.Router();
const signupController = require('../controllers/Signup.controller');

router.post('/', signupController.create);

module.exports = router;