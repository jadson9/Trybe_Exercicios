let salarioBruto = 4000;
let salarioBase;
let salarioLiquido;

// Variaveis INSS Aliquota
let aliquotaInss_8 = salarioBruto * 0.08
let aliquotaInss_9 = salarioBruto * 0.09
let aliquotaInss_11 = salarioBruto * 0.11
let aliquotaInssMax = 570.88

// Deduz INSS
if (salarioBruto <= 2594.93) {
    salarioBase = salarioBruto - aliquotaInss_8

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - aliquotaInss_9

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - aliquotaInss_11
    
} else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - aliquotaInssMax
    
}

// Deduz IR
if (salarioBase < 1903.98){

    console.log("Fique tranquilo! Você está isento")

} else if (salarioBase >= 1903.99 && salarioBase <= 2.826,65) {
    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80)
    console.log("Salario bruto:", salarioBruto)
    console.log("Salario base:", salarioBase)
    console.log("Salario Liquido:", salarioLiquido)


} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80)
    console.log("Salario bruto:", salarioBruto)
    console.log("Salario base:", salarioBase)
    console.log("Salario Liquido:", salarioLiquido)


} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13)
    console.log("Salario bruto:", salarioBruto)
    console.log("Salario base:", salarioBase)
    console.log("Salario Liquido:", salarioLiquido)


} else if (salarioBase > 4.664,68) {
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36)
    console.log("Salario bruto:", salarioBruto)
    console.log("Salario base:", salarioBase)
    console.log("Salario Liquido:", salarioLiquido)
}


