let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem vinda,', info['personagem'])
info['recorrente'] = 'Sim'
for (x in info) {
    console.log(x)
}

for (x in info) {
    console.log(info[x])
}

