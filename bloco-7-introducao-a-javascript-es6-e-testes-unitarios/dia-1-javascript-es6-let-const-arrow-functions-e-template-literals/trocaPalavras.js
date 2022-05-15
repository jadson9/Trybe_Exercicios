let skills = ['html', 'css', 'JavaScript', 'Photoshop', 'Coreldraw']

let trocaPalavra = (palavra, to = 'Bebeto') => {
    let resultado = palavra.replace('x', to )
    return resultado
}

let recebeFuncao1 = (funcao1) => {
    console.log(`${funcao1("Tryber x aqui!")} ${skills}`)
}

recebeFuncao1(trocaPalavra)

