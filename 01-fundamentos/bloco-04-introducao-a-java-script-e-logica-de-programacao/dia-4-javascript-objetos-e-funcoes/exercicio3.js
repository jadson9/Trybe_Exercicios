function verificapalindromo(palavra) {
  let aux = palavra.split("");
  let nomeInverso = aux.reverse();
  let resultado = '';
  for (let i = 0; i < nomeInverso.length; i += 1) {
    resultado += nomeInverso[i]
  }
  if (palavra === resultado) {
      return true
  }
  return false
}

function maiorNumero(array) {
    let numeroMaior = Math.max.apply(Math, array);
    return array.indexOf(numeroMaior);
}

function menorNumero(array) {
  let numeroMenor = Math.min.apply(Math, array);
  return array.indexOf(numeroMenor);
}

function nomeMaior(arrayNomes) {
  let listQuantidade = []
  for (let i = 0; i < arrayNomes.length; i += 1 ) {
    listQuantidade.push(arrayNomes[i].length)
  }
  return arrayNomes[maiorNumero(listQuantidade)]
}

function numerosRepetidos(listNumber) {
  let list = [];
  let cont = 0;
  for (let i = 0; i < listNumber.length; i += 1) {
      for (let i2 = 0; i2 < listNumber.length; i2 += 1) {
          if (listNumber[i] === listNumber[i2]) {
            cont += 1
          }
      }
      list.push(cont)
      cont = 0
  }
  return listNumber[maiorNumero(list)]
}
function somatorioNumeros(number) {
  let listNumber = [];
  let somatorio = 0
  for (let i = 1; i <= number; i += 1) {
    listNumber.push(i)
  }
  for (let i2 = 0; i2 < listNumber.length; i2 += 1) {
      somatorio += listNumber[i2]
  }
  return somatorio
}
