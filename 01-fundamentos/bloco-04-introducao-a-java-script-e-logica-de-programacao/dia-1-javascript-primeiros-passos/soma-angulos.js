let a = 110;
let b = 40;
let c = 30;
let reslt = a + b + c ;
let saida;

if(a<0){
    console.log("ângulo A inválido")

} else if(b<0){
    console.log("ângulo B inválido")
} else if(c<0){
    console.log("ângulo C inválido")
} else {
    if (reslt === 180){
        saida = true
        console.log(saida)
    } else {
        saida = false
        console.log(saida)
    }
}