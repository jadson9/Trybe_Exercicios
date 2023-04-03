# Exercício 2:
# Agora vamos explorar o sistema que estamos utilizando.
# Crie um script chamado my_platform.py e utilize-o para exibir
# no console as informações solicitadas abaixo. Para isso, utilize
# o módulo platform do Python 😎.

# A plataforma que está sendo utilizada (linux, win32, darwin, etc);
# A versão (release);
# A arquitetura (x32 ou x64);


import platform

print(
    f"Plataforma: {platform.system()}\n"
    f"Versão: {platform.release()}"
    f"Arquitetura: {platform.architecture()[0]}\n"
)
