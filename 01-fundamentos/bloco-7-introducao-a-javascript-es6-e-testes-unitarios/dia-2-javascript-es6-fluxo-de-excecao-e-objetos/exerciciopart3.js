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

let mostraTamaho = (objeto) => mostraChaves(objeto).length

let mostraValores = (objeto) => Object.values(objeto)

adicionaTurno(lesson2, 'turno', 'noite')

console.log(lesson2)

console.log(mostraChaves(lesson2))

console.log(mostraTamaho(lesson2))

console.log(mostraValores(lesson2))


let lessonsAll = (list) => {
    let lessonsAllAux = {}
    for (let i = 0; i < list.length ; i += 1) {
        let objetoCopy = Object.assign({}, list[i]);
        lessonsAllAux[`lesson${i + 1}`] = objetoCopy
    }
    console.log(lessonsAllAux)
    // console.log(lessonw1)
}


lessonsAll([lesson1, lesson2, lesson3])

