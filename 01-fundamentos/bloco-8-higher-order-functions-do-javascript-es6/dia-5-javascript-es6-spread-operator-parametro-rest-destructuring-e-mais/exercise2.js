// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numeros) => numeros.reduce((acc, item) => acc + item, 0);

console.log(sum(5, 6, 45, 50, 13, 7));