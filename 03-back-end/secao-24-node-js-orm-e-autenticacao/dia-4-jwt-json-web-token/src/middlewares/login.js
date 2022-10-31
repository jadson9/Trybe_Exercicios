const { createToken } = require('../utils/jwt');

const login = (req, res) => {
  const { body } = req;
  const token = createToken({ username: body.username, admin: false });
  res.status(200).json({ token });
};

module.exports = {
  login,
};