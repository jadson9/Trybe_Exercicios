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

