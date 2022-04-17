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

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
  };
info2['recorrente'] = 'Sim'

for (let x2 in info){
    if (x2 === 'recorrente'){
        if(info[x] === info2[x]){
        console.log('Ambos recorrentes')
        }
    } else {
        console.log(info[x2], ' e ', info2[x2])
    }
    
    
}

