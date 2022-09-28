const red = require('readline-sync');

function calculationBmi(altura, peso) {
    const resultado = peso / (altura * altura);
    let respostaAlt = null;

    if(resultado < 18.5) {
      respostaAlt = 'Abaixo do peso';
    } else if(resultado > 18.5 && resultado < 24.9) {
        respostaAlt = 'Peso normal';
    } else if(resultado > 25 && resultado < 29.9) {
        respostaAlt = 'Acima do peso';
    } else if(resultado > 30 && resultado < 34.9) {
        respostaAlt = 'Obesidade grau I';
    } else if(resultado > 35 && resultado < 39.9) {
        respostaAlt = 'Obesidade grau II';
    } else {
        respostaAlt = 'Obesidade graus III e IV';
    }
    return `Sua massa corporal é ${resultado.toFixed(2)}, Situação: ${respostaAlt}`;
}


console.log('-----------CALCULADORA DE MASSA CORPORAL--------------')

const altura = red.questionFloat('Qual a sua altura? ');
const peso = red.questionInt('Qual o seu peso? ');


console.log(calculationBmi(altura, peso))