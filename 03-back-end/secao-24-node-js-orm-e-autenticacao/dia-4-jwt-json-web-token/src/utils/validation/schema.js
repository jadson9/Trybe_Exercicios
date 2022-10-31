const Joi = require('joi');


const loginValidation = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(8).required(),
});


module.exports = {
  loginValidation,
};