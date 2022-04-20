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
  let numeroMaior = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > numeroMaior) {
      numeroMaior = i;
    }
  }
  return numeroMaior;
}
