
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const userModel = require('../models').User;
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const validations = require('../validations/userValidations.js');

const app = express();

// for parsing application/json
router.use(bodyParser.json()); 
// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

router.post('/register', [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
    ], async (req, res) => {
    try{
        const validator = await validations.customRegisterValidation(req , res);
        if(!validator){
            const hashedPassword = await bcrypt.hash(req.body.password , 10);
            userModel.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            }).then(user => res.json({
                meassage: 'User Created Successfully!',
                data: user
            }));
        }
    } catch {
        res.status(500).send();
    }
});
        
router.post('/login' , [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
    ], async (req,res) => {
    try{
        await validations.customLoginValidation(req , res);
    } catch {
        res.status(500).send();
    }
});

module.exports = router;
