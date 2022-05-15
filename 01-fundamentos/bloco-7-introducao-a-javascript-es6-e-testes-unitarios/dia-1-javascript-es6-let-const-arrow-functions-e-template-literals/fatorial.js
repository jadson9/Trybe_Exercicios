const fatorial = (numero) => {
  let fatorialList = [numero];
  let soma = numero;
  for (let i = numero; i > 0; i -= 1) {
    if ( i !== numero) {
        fatorialList.push(i);
        soma *= i;
    }
  }
  fatorialList = fatorialList.toString();
  fatorialList = fatorialList.replace(/,/g, ' * ');
  return `${fatorialList} = ${soma}`;
}

console.log(fatorial(50))