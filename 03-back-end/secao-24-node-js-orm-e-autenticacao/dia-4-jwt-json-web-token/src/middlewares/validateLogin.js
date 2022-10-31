const { loginValidation } = require('../utils/validation/schema');
const { createToken } = require('../utils/jwt');


const validateLogin = (req, res, nex) => {
  const { body } = req;
  const { error } = loginValidation.validate(body);
  if (error) {
    res.status(400).json({ message: error.message})
  } else {
    nex();
  }
};

module.exports = {
  validateLogin,
};