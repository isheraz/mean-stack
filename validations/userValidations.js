
const userModel = require('../models').User;
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const customRegisterValidation = async (req , res) => {

    // check body validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
    }

    // check if email already exists
    const checkEmail = await userModel.findOne({where: {'email': req.body.email} });
    if(checkEmail != null){
        return res.status(400).json({message: 'Email Already Exists'});
    }

}

const customLoginValidation = async (req , res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = await userModel.findOne({where: {'email': req.body.email} });
        if(user == null){
            return res.status(400).json({
                message: 'User does not exists with this email'
            });
        }
        if(await bcrypt.compare(req.body.password ,user.password)){
            res.json({
                message: 'User Successfully logged in',
                data: user
            });
        } else{
            res.json({
                message: 'Your email or password is incorrect',
            });
        }
}

module.exports = {
    customRegisterValidation,
    customLoginValidation
};
