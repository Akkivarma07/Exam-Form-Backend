const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');

// Endpoint to handle form registration
router.post('/registerform', userController.registerForm);

// Endpoint to handle form editing
router.put('/editform', userController.editForm);

// Endpoint to handle form deletion
router.delete('/deleteform/:id', userController.deleteForm);

// Endpoint to handle viewing all forms
router.get('/viewforms', userController.viewForms);
router.get('/getform/:id', userController.viewFormById);

// Assuming you have a router object
// router.get('/getform/:id', userController.viewFormById);



module.exports = router;
