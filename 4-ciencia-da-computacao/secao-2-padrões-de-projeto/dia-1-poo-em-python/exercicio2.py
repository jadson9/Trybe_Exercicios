# Exercício 2: Defina uma classe Estatistica que calcule média, mediana
# e moda de uma lista de números.


class Estatistica:
    @classmethod
    def media(self, arr):
        total = 0
        for i in arr:
            total += i
        return int(total / len(arr))

    @classmethod
    def mediana(self, arr: list):
        lista_ordenada = sorted(arr)
        tamanho_lista = len(lista_ordenada)
        if tamanho_lista % 2 == 0:
            mediana = (
                lista_ordenada[tamanho_lista // 2 - 1]
                + lista_ordenada[tamanho_lista // 2]
            ) / 2
        else:
            mediana = lista_ordenada[tamanho_lista // 2]
        return mediana

    @classmethod
    def moda(self, arr):
        resposta = []
        aux = 0
        for i in arr:
            if arr.count(i) > aux:
                aux = arr.count(i)
                resposta = []
                resposta.append(i)
            elif arr.count(i) == aux and not (i in resposta):
                resposta.append(i)

        return resposta[0] if len(resposta) == 1 else resposta
