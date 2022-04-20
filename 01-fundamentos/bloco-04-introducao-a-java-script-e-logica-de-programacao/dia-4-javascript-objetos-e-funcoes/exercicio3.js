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
console.log(verificapalindromo('desenvolvimento'))
