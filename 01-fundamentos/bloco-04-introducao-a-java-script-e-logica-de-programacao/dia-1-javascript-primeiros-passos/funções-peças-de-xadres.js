let peca0 = "Peão";
let peca = peca0.toLowerCase()
switch (peca){

    case "peão":
        console.log("Movimentos: somente para frente, sendo uma casa de cada vez, \n se for a primeira jogada da peça, pode avançar até duas casas")
        break
    
    case "torre":
        console.log("Movimentos: Horizontais e Verticais para frete e para trás")
        break

    case "cavalo":
        console.log("Movimentos: Movimentos em L")
        break

    case "bispo":
        console.log("Movimentos: Diagonais para frente e para tras")
        break

    case "rainha":
        console.log("Movimentos: Horizontais, verticais e diagonais para frete e para tras")
        break
    
    case "rei":
        console.log("Movimentos: Horizontais, verticais e diagonais para frete e para tras com limite de apenas uma casa ")
        break

    default:
        console.log("Erro: Nome inválido")
}