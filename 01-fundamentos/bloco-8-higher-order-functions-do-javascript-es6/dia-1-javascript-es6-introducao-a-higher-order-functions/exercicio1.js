// Função de cadastro

const pessoaContratada = (nomeCompleto) => {
    let nomeFormatado = nomeCompleto.toLowerCase().replace(/ /g, '_')
    let pessoaCad = {nomeCompleto: `${nomeCompleto}`, email: `${nomeFormatado}@trybe.com`}
    return pessoaCad
}

const newEmployees = (func) => {
    let d1 = func('Pedro Guerra');
    let d2 = func('Luiza Drumond');
    let d3 = func('Carla Paiva');
  const employees = {
    id1: Object.values(d1)[0], // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: Object.values(d2)[0], // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: Object.values(d3)[0], // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
    return employees;
};

console.log(newEmployees(pessoaContratada))





// Função Sorteio

const verificaNumeros = (numero, resultado) => numero === resultado ? "Parabéns você ganhou" : "Tente novamente"

const sorteio = (func, num) => {
    let resultado = Math.floor(Math.random() * 5 + 1 );
    console.log(func(num, resultado))

}

sorteio(verificaNumeros, 5)




//Função que verifica respostas

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contagemPontuação = (gabarito, resposta) => {
    let resultado = 0;
    for (i in gabarito) {
        if (gabarito[i] === resposta[i]) {
            resultado += 1
        } else if (resposta[i] !== 'N.A' && gabarito[i] !== resposta[i]) {
            resultado -= 0.5
        }
    }
    return resultado
}

const verificaResposta = (gabarito, resposta, func) => func(gabarito, resposta)

console.log(verificaResposta(RIGHT_ANSWERS, STUDENT_ANSWERS, contagemPontuação))