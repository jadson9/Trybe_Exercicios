let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

let nome = leitor['nome']
let sobreNome = leitor['sobrenome']


console.log('O livro favorito de '+ nome + ' ' + sobreNome + ' se chama ' + leitor.livrosFavoritos[0].titulo)