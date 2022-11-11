interface notasProvas {
    nota1: number;
    nota2: number;
    nota3: number;
    nota4: number;
}

interface notasTrabalho {
    nota1: number;
    nota2: number;
}


class estudantes {
  matricula: number;
  nome: string;
  notasDeProvas: notasProvas;
  notasDeTrabalhos: notasTrabalho;
}