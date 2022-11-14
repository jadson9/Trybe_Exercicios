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

class Person {
  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    if (this._name.length < 3) {
      throw new Error('Nome deve possuir mais de 3 caracteres')
    }
    if (this._birthDate > new Date()) {
      throw new Error('Data de nascimento não pode ser uma data no futuro')
    }

    const umAno = 1000 * 60 * 60 * 24 * 365;

    const diferenca = Math.abs(this._birthDate.getTime() - new Date().getTime());

    if ((diferenca / umAno) > 120) {
      throw new Error('Usuario Não pode ter mais de 120 anos');
    }
  }

  get name(): string {
    return this._name;
  }

  set name(n: string) {
    this._name = n;
  }
}

const person1 = new Person('Jadson', new Date('1997-01-01'));

console.log(person1.name);