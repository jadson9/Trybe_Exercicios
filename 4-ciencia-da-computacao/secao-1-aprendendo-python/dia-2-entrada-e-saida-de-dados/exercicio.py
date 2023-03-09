import random
import csv
import json

# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na
# vertical em escada invertida.


def nome_em_escada(nome):
    aux = ""
    aux2 = []
    for i in range(len(nome)):
        aux += nome[i]
        aux2.append(aux)
    for y in range(len(aux2)):
        print(aux2[-(y + 1)])


# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa
# usuária tenha que adivinhar uma palavra que será mostrada com as letras
# embaralhadas. O programa terá uma lista de palavras e escolherá uma
# aleatoriamente. O jogador terá três tentativas para adivinhar a palavra.
# Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou
# ou perdeu o jogo.


# Exercício 3: Modifique o exercício anterior para que as palavras
# sejam lidas de um arquivo. Considere que o arquivo terá cada
# palavra em uma linha.


def acerte_a_palavra():
    palavras = []
    arquivo = open("palavras.txt")

    for palavra in arquivo:
        palavras.append(palavra.rstrip("\n"))

    arquivo.close()

    print(palavras)

    palavra_escolhida = random.choice(palavras)
    palavra_embaralhado = "".join(
        random.sample(palavra_escolhida, len(palavra_escolhida))
    )
    texto_game = "Jogo: adivinhe qual palavra embaralhada"
    print(f"{texto_game:=^50}")
    print(f"Palavra: {palavra_embaralhado}")

    rodadas = 3

    while rodadas > 0:
        resposta = input(
            f"Qual é a palavra? você tem apenas: {rodadas} chances: "
        )
        if resposta == palavra_escolhida:
            print("Acertou!")
            rodadas = 0
        else:
            print("Resposta errada!")
            rodadas -= 1
    print(palavra_escolhida)


acerte_a_palavra()

# ----------------------------------------------------------------


def calcula_porcentagem_livros_por_categoria():
    with open("data.json") as dados_livros:
        dados = json.load(dados_livros)
        total_livros = len(dados)
        categorias = {}
        for livro in dados:
            for i in livro["categories"]:
                categoria = i
                if categoria in categorias:
                    categorias[categoria] += 1
                else:
                    categorias[categoria] = 1
        resultados = []
        for categoria, num_livros in categorias.items():
            porcentagem = num_livros / total_livros * 100
            resultados.append([categoria, porcentagem])

        with open("livros_por_categoria.csv", mode="w") as arquivo_csv:
            escritor_csv = csv.writer(
                arquivo_csv,
                delimiter=",",
                quotechar='"',
                quoting=csv.QUOTE_MINIMAL,
            )
            escritor_csv.writerow(["Categoria", "Porcentagem"])
            for resultado in resultados:
                escritor_csv.writerow(resultado)


calcula_porcentagem_livros_por_categoria()
