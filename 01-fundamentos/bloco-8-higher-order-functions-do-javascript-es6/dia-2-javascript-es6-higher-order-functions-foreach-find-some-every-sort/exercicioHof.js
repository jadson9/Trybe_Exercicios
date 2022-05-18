const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

// HOF procura o primeiro livro que o autor tem o ano de nascimento de 1947
  
const procuraPrimeira = (lista) => lista.find((pessoa) => pessoa.author.birthYear === 1947)

// HOF retorna um livro com o menor nome 

const procuraMenorNome = (lista) => {
  let menor = lista[0].name;
  let elemento;
  lista.forEach((element) => {
    if (element.name.length < menor.length ) {
      menor = element.name
      elemento = element
    }
  })
  return elemento
};

// HOF Encontra o primeiro livro cujo nome possui 26 caracteres

const nome26 = (lista) => lista.find(element => element.name.length === 26)

// HOF Ordena os livros por data de lançamento em ordem decrescente.

const expectedResultSort = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
  ];
  

function booksOrderedByReleaseYearDesc(lista) {
  return lista.sort((a, b) => b.releaseYear - a.releaseYear)
}


// HOF que retorna true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário

const expectedResultEvery = false;

function everyoneWasBornOnSecXX(lista) {
  return lista.every(element => element.author.birthYear > 1901 && element.author.birthYear < 2000)
}


// HOF retorna true, se algum livro foi lançado na década de 80, e false, caso contrário.

const expectedResult = true;

function someBookWasReleaseOnThe80s(lista) {
  return lista.some(element => element.releaseYear > 1980 && element.releaseYear < 1989)
}


// HOF retorna true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const expectedResultUnique = false;

function authorUnique(lista) {
  return lista.every(element => element.author.birthYear === lista[0].author.birthYear)
}

console.log(authorUnique(books))