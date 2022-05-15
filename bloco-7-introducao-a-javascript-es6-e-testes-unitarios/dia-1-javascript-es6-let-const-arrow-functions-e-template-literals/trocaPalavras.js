let skills = ['html', 'css', 'JavaScript', 'Photoshop', 'Coreldraw']

let trocaPalavra = (palavra, to = 'Bebeto') => {
    let resultado = palavra.replace('x', to )
    console.log(resultado)
}
trocaPalavra("Tryber x aqui!", 'viadinho')