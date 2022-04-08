let a = 87;
let b = 90;
let c = 250;
let resultado;

if (a>b && a>c){
    resultado = a
} else if (b > c) {
    resultado = b
} else {
    resultado = c
}
console.log("Entre", a, b, "e", c, "o maior numero é:",resultado)