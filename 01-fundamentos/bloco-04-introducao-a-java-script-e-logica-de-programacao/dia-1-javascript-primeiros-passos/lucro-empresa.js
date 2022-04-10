let valorProduto = 350;
let valorComImposto = (valorProduto * 0.2) + valorProduto
let valorVenda = valorComImposto + 150
let resultado1000vendas = (valorVenda - valorComImposto) * 1000
console.log(" Produto com imposto (20%):", valorComImposto, "\n",
"Valor de venda:", valorVenda , "\n",
"Com a venda de 1000 produtos a empresa lucrará:", resultado1000vendas) 