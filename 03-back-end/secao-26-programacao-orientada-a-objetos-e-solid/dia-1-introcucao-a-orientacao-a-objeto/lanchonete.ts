class Cliente {
  private _nome: string;
  
  constructor(nome: string) {
    this._nome = nome;
  }
};

class Produto {
  private _nome: string;
  private _preco: number;
  
  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get preco(): number {
    return this._preco;
  }
};

class Pedido {
  private _cliente: string;
  private _itensConsumidos: Produto[];
  private _formaPagamento: number
  private _desconto?: number;
  constructor (cliente: string, itensConsumidos: Produto[], pagamento: number, desc?: number) {
    this._cliente = cliente;
    this._itensConsumidos = itensConsumidos;
    this._formaPagamento = pagamento;
    this._desconto = desc;
  }

  get total(): number {
    const valores = this._itensConsumidos.map((el) => el.preco);
    const total = valores.reduce((acc, num) => acc + num);
    return total;
  }

  get totalComDesconto(): number {
    const desco = this._desconto || 1
    return this.total * desco;
  }
};
