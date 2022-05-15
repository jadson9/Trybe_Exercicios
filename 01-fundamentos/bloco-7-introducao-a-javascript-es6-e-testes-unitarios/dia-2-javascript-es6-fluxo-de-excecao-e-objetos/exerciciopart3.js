const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};


let adicionaTurno = (objeto, chave, valor) => objeto[chave] = valor

let mostraChaves = (objeto) => Object.keys(objeto)

adicionaTurno(lesson2, 'turno', 'noite')


console.log(lesson2)

console.log(mostraChaves(lesson2))