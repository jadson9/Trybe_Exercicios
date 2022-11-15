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
  enrollment: number;
  nome: string;
  examsGrades: NotasProvas;
  worksGrades: NotasTrabalho;
}


abstract class Person {
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

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(b: Date) {
    this._birthDate = b;
  }
}


class Students extends Person {
  constructor(private params: Params, birthDate: Date) {
    params.enrollment += 1 || 1;
    if (Object.values(params.examsGrades).length < 4) {
      throw new Error('Aluno deve possuir 4 notas de provas')
    }

    if (Object.values(params.worksGrades).length < 2) {
      throw new Error('Aluno deve possuir 2 notas de trabalho')
    }
    super(params.nome, birthDate);
  }

  sumGrades(): number {
    const notasMescladas = [
      ...Object.values(this.params.examsGrades),
      ...Object.values(this.params.worksGrades),
    ];
    const soma = notasMescladas.reduce((acc, number) => acc + number);
    return soma;
  }

  gsumAverageGrade(): number {
    const total = this.sumGrades();
    const provas = Object.values(this.params.examsGrades).length;
    const trabalhos = Object.values(this.params.worksGrades).length;;
    const quantiNotas = provas + trabalhos;
    return total / quantiNotas;
  }

  generateEnrollment(): number {
    return this.params.enrollment;
  }
}

interface Enployee {
  registration: number;
  salary: number;
  admissionDate: Date;
  generateregistration(): string;
}


class Subject {
  constructor (private _name: string) {
    if (_name.length < 3) {
      throw new Error('Nome deve possuir no minimo 3 caracteres');
    }
  }

  get name(): string {
    return this._name;
  }

  set name(n: string) {
    if (n.length < 3) {
      throw new Error('Nome deve possuir no minimo 3 caracteres');
    }
    this._name = n;
  }
}

class Teacher extends Person {
  constructor(_name: string, _birthDate: Date, private _subject: Subject) {
    super(_name, _birthDate);
  }

  get name(): string {
    return super.name;
  }

  get birthDate(): Date {
    return super.birthDate
  }

  get subject(): Subject {
    return this._subject;
  }
}

const sub = new Subject('Biologia');

const p1 = new Teacher('jadson', new Date(), sub);

console.log(p1.name, p1.birthDate, p1.subject.name)
