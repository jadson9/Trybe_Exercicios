const fs = require('fs').promises;

const arquivo = 'simpsons.json'

async function redSimpsons(nomeDoArquivo) {

    let data = await fs.readFile(nomeDoArquivo);
    data = JSON.parse(data);

    for (let i = 0; i < data.length; i += 1 ) {
      console.log(`${data[i].id} - ${data[i].nome}`)
    }
}

async function searchSimpsons(id) {

    try {

      let data = await fs.readFile(arquivo);
      data = JSON.parse(data);
      const resultado = data.find((elEncon) => elEncon.id == id)
      console.log(`${resultado.id} - ${resultado.nome}`);
        
    } catch (error) {
      console.error('Personagem não encontrado!')
    }

}

async function removeSimpsons() {
  let resultado = await fs.readFile(arquivo);
  resultado = JSON.parse(resultado);

  resultado = resultado.filter((el) => el.id != "10" && el.id != "6");

  await fs.writeFile(arquivo, JSON.stringify(resultado));
  console.log('Personages excluidos com sucesso!')
}

async function unionFamily() {
  let resultado = await fs.readFile(arquivo);
  resultado = JSON.parse(resultado);

  let aux = [];
  
  for(let i = 0; i < 4; i +=1) {
    aux = [...aux, resultado[i]]
  }
  
  await fs.writeFile("simpsonFamily.json", JSON.stringify(aux));
  console.log('Familia unida com sucesso!')
  return aux;
}

// unionFamily();


async function addNelson() {
  let resultado = await fs.readFile(arquivo);
  resultado = JSON.parse(resultado);

  const addPerson = resultado.find((person) => person.nome = 'Nelson Muntz')
  
  const aux = await unionFamily();
    
  await fs.writeFile("simpsonFamily.json", JSON.stringify([...aux, addPerson]));
  console.log('Nelson Muntz adicionado com sucesso!')
}

// addNelson();

async function addMargie() {
    let resultadoAll = await fs.readFile(arquivo);
    let resultadoFamily = await fs.readFile("simpsonFamily.json");
    resultadoAll = JSON.parse(resultadoAll);
    resultadoFamily = JSON.parse(resultadoFamily);
  
    const semNelson = resultadoFamily .filter((person) => person.nome != 'Nelson Muntz')
    const PersonMargie = resultadoAll.find((person) => person.nome = 'Maggie Simpson')
      
    await fs.writeFile("simpsonFamily.json", JSON.stringify([...semNelson, PersonMargie]));
    console.log('Nelson e movido e Margie adicionada com sucesso!')
  }

//   addMargie();