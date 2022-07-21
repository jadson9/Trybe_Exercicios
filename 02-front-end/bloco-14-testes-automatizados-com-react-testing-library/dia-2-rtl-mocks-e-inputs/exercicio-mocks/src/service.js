// import React from "react";

function numeroAleatorio(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = numeroAleatorio;