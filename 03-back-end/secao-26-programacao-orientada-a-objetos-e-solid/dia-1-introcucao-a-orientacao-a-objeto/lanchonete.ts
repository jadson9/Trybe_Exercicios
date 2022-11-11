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
};

class Pedidos {
  private _cliente: string;
  private _itensConsumidos: string[];
  private _formaPagamento: number
  private _desconto?: number;
  constructor (cliente: string, itensConsumidos: string[], pagamento: number, desc?: number) {
    this._cliente = cliente;
    this._itensConsumidos = itensConsumidos;
    this._formaPagamento = pagamento;
    this._desconto = desc;
  }
};
