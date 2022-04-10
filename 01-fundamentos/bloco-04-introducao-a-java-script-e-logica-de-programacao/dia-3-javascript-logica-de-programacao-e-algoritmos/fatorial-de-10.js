let fatorial = 10;
let numerosAnteriores = []
let resultado = fatorial

for (let i2 = 1; i2 < fatorial; i2 += 1){
    resultado = resultado  * i2 
}

for (let i = fatorial ; i >= 1 ; i -= 1){
    numerosAnteriores.push(i)
}

console.log(resultado)
