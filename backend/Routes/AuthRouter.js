const { signup, login } = require('../Controllers/AuthController');
const { signUpValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// Jab yaha pe signUpValidation se validate hoga tabhi signup pe request jaayega
router.post('/signup', signUpValidation, signup)
router.post('/login', loginValidation, login)

module.exports = router;