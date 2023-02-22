# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def maior(num1, num2):
    if num1 > num2:
        return num1
    return num2


print(maior(68, 28))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def media(valores):
    total = 0
    for valor in valores:
        total += valor
    return total / len(valores)


print(media([5, 18, 10, 28]))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def create_quadrado(tamanho):
    for i in range(tamanho):
        x = "*"
        print(f"{tamanho * x}")


create_quadrado(5)

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne
# o nome com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".


def nome_maior(arr):
    nome = ""
    for nom in arr:
        if len(nom) > len(nome):
            nome = nom
    return nome


print(nome_maior(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que
# custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas e o preço
# total a partir do tamanho de uma parede (em m²).


def calcular_preco_tinta(tamanho_parede):
    qtd_tinta_litros = tamanho_parede / 3

    qtd_latas_tinta = qtd_tinta_litros / 18
    if qtd_latas_tinta < 1:
        qtd_latas_tinta = 1

    preco_total = qtd_latas_tinta * 80

    # Retorna a tupla contendo a quantidade de latas de tinta e o preço total
    return (qtd_latas_tinta, preco_total)


print(calcular_preco_tinta(180))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo", caso não
# seja possível formar um triângulo.


def tipo_triangulo(a, b, c):
    # Verifica se é possível formar um triângulo
    if a + b <= c or a + c <= b or b + c <= a:
        return "não é triângulo"

    # Verifica o tipo de triângulo formado
    if a == b == c:
        return "triângulo equilátero"
    elif a == b or a == c or b == c:
        return "triângulo isósceles"
    else:
        return "triângulo escaleno"
