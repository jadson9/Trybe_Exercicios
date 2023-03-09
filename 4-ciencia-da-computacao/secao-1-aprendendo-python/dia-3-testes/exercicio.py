"""
  Exercico 1
    Retorna uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções:
    - Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
    - Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
    - Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do número.
"""

def fizzbuzz(n):
    result = []
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result

print(fizzbuzz(15))

"""
  Exercício 2: Em alguns lugares é comum lembrar um número do telefone
  associando seus dígitos a letras. Dessa maneira, a expressão MY LOVE
  significa 69 5683. Claro que existem alguns problemas, uma vez que
  alguns números de telefone não formam uma palavra ou uma frase, e os
  dígitos 1 e 0 não estão associados a nenhuma letra.

  Sua tarefa é ler uma expressão e encontrar o número de telefone
  correspondente baseado na tabela abaixo. Uma expressão é composta
  por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.
"""
def telefone(expressao):
    tabela = {'ABC': '2', 'DEF': '3', 'GHI': '4', 'JKL': '5', 
              'MNO': '6', 'PQRS': '7', 'TUV': '8', 'WXYZ': '9'}
    telefone = ''
    for caractere in expressao:
        if caractere.isdigit():
            telefone += caractere
        elif caractere.isalpha():
            for letras, numero in tabela.items():
                if caractere in letras:
                    telefone += numero
        else:
            telefone += '-'
    return telefone

print(telefone("MY-MISERABLE-JOB"))


"""
  Exercício 3 Faça uma função que valide um e-mail, lançando uma exceção quando o
  valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

  Devem seguir o formato nomeusuario@nomewebsite.extensao;

  O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);

  O nome de usuário deve iniciar com uma letra;

  O nome do website deve conter somente letras e dígitos;

  O tamanho máximo da extensão é de 3 caracteres.
"""
import re

def validar_email(email):
    padrao = r'^[a-zA-Z][\w-]*@[a-zA-Z\d]+\.[a-zA-Z]{1,3}$'
    if not re.match(padrao, email):
        raise ValueError('Endereço de e-mail inválido.')


validar_email('jadson@test.com')

"""
  Exercício 4
  Baseado no exercício anterior, escreva uma função que, dado uma lista de 
  emails, deve retornar somente os emails válidos. Caso uma exceção ocorra, 
  apenas a escreva na tela..
"""

def filtrar_emails_validos(lista_emails):
    emails_validos = []
    for email in lista_emails:
        try:
            validar_email(email)
            emails_validos.append(email)
        except ValueError as erro:
            print(f'Erro: {erro}')
    return emails_validos

print(filtrar_emails_validos(["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]))
