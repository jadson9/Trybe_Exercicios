require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  })
  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.SECRET);
    return { type: null, message: data };
  } catch (error) {
    const e = new Error('Token expirado');
    return { type: 'ERROR', message: e.message };;
  }
};

module.exports = {
  createToken,
  validateToken,
};