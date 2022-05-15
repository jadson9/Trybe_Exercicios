function maiorPalavra(palavra) {
  let palavraList = palavra.split(' ');
  let palavraMaior = palavraList[0]
  for (let i = 0; i < palavraList.length; i += 1) {
      palavraMaior = palavraList[i].length > palavraMaior.length ? palavraList[i] : palavraMaior
  }
  console.log(palavraMaior)
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')