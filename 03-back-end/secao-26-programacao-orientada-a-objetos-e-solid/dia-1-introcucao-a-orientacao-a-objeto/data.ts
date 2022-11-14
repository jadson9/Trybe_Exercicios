class Data {
  private _meses: string[];
  private _dia: string;
  private _mes: string;
  private _ano: string;
  constructor(dia: string, mes: string, ano: string) {
    if (dia.length === 2 && mes.length === 2 && ano.length ===4) {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
      this._meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ];
    } else {
      throw new Error('Data inválida, formato correto: “01/01/1900”')
    }
  }

  getMonthName(): string {
    const mesNum = Number(this._mes) - 1;
    return this._meses[mesNum];
  }

  isLeapYear(): boolean {
    const anoNum = Number(this._ano);
    let resposta = false;
    if ((anoNum / 4) % 2 === 0 && (anoNum / 100) % 2 !== 0) {
      resposta = true
    } else if ((anoNum / 4) % 2 === 0 && (anoNum / 100) % 2 === 0 && (anoNum / 400) % 2 === 0) {
      resposta = true
    } else {
      resposta = false;
    }
    return resposta;
  }
}