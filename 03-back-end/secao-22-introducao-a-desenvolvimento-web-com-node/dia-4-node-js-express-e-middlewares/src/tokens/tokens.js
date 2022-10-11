const fs = require('fs').promises;
const path = require('path');

const caminho = './tokens.txt';

const getTokens = async () => {
  try {
    const tokens = await fs.readFile(caminho, 'utf8');
    console.log(tokens)
    return JSON.parse(tokens);
  } catch (error) {
    return [];
  }
}

const setToken = async (token) => {
  try {
    const tokens = await getTokens();
    tokens.push(token);
    await fs.writeFile(caminho, JSON.stringify(tokens))
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getTokens,
  setToken,
}