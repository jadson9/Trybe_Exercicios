
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

// console.log(pessoaContratada('Jadson Cerqueira'))
console.log(newEmployees(pessoaContratada))


