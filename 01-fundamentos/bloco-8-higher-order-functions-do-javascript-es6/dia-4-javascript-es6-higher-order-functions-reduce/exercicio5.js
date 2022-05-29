//  função retorna a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA(obj) {
  let spectro = obj.map((elem) => elem.split(''))
  let resultado = spectro.reduce((acc, item) => {
    item.forEach((elem1) => {
      if (elem1 === 'A' || elem1 === 'a') {
        acc[elem1] = acc[elem1] + 1 || 1
      }
    });
    return acc
  }, {})
  return resultado
}

console.log(containsA(names))