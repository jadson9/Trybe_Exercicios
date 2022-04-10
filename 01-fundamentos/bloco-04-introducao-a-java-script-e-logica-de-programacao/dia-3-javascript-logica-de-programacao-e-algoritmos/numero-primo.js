let numero = 50;
let seqNumeros = []
let numesrosPrimos = []
let modelo = []
let modelo2 = [1, 1]
let aux = []

for(let i = 0 ; i <= numero; i += 1){
    modelo = [1, i]
    seqNumeros.push(i)
    for (let i2 = i ; i2 >= i; i2 -= 1 ){
        if (i % 2 === 0){
            aux.push(i)
            
        }
    if (aux === modelo2 ){
        numesrosPrimos.push()
    }
    else if (aux == modelo ){
        numesrosPrimos.push(i)
    }
    }
}
console.log(numesrosPrimos)

