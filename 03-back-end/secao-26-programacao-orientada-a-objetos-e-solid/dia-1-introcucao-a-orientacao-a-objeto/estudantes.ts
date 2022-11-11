interface NotasProvas {
  nota1: number;
  nota2: number;
  nota3: number;
  nota4: number;
}

interface NotasTrabalho {
  nota1: number;
  nota2: number;
}


interface Params {
  matricula: number;
  nome: string;
  notasDeProvas: NotasProvas;
  notasDeTrabalho: NotasTrabalho;
}


class Estudantes {
  private matricula: number;
  private nome: string;
  private notasDeProvas: NotasProvas;
  private notasDeTrabalhos: NotasTrabalho;

  constructor(params: Params) {
    this.matricula = params.matricula;
    this.nome = params.nome;
    this.notasDeProvas = params.notasDeProvas;
    this.notasDeTrabalhos = params.notasDeTrabalho;
  }

  get soma(): number {
    const notasMescladas = [
      ...Object.values(this.notasDeProvas),
      ...Object.values(this.notasDeTrabalhos),
    ];
    const soma = notasMescladas.reduce((acc, number) => acc + number);
    return soma;
  }

  get media(): number {
    const total = this.soma;
    const provas = Object.values(this.notasDeProvas).length;
    const trabalhos = Object.values(this.notasDeTrabalhos).length;;
    const quantiNotas = provas + trabalhos;
    return total / quantiNotas;

  }
}

const dadosEstudante: Params = {
  matricula: 12,
  nome: 'Jadson',
  notasDeProvas: { nota1: 5, nota2: 7, nota3: 3, nota4: 2 },
  notasDeTrabalho: { nota1: 8, nota2: 10 },
}

const estudate = new Estudantes(dadosEstudante);

console.log("Soma", estudate.soma);
console.log("Media", estudate.media);