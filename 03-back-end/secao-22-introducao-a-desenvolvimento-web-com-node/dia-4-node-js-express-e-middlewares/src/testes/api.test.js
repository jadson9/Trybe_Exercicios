const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../app')

const response = {
  "name": "Trekking",
  "price": 0,
  "description": {
   "rating": 5,
   "difficulty": "Fácil",
   "createdAt": "10/08/2022"
  }
}

chai.use(chaiHttp)

describe('Testando a api de setTurism()', function () {

  it('verifica se o retorno da mensagem é "Atividade cadastrada com sucesso!"', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "name": "Jaboq",
        "price": 6,
        "description": {
          "rating": 3,
          "difficulty": "Fácil",
          "createdAt": "25/08/2022"
        }
      });
    expect(res.status).to.be.equal(201);
    expect(res.body.message).to.be.equal("Atividade cadastrada com sucesso!");
  });


  it('retorna um erro se a chave nome não estiver declarada e a resposta da requisição com a mensagem "O campo name é obrigatório"', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "price": 6,
        "description": {
          "rating": 3,
          "difficulty": "Fácil",
          "createdAt": "25/08/2022"
        }
    });
    expect(res.status).to.be.equal(400);
    expect(res.body.message).to.be.equal("O campo name é obrigatório");
  });

  it('retorna um erro se a chave nome tiver menos de 4 caracters com a mensagem "O campo name deve ter pelo menos 4 caracteres"', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "name": "Ja",
        "price": 6,
        "description": {
          "rating": 3,
          "difficulty": "Fácil",
          "createdAt": "25/08/2022"
        }
      });
    expect(res.status).to.be.equal(400);
    expect(res.body.message).to.be.equal("O campo name deve ter pelo menos 4 caracteres");
  });

  it('retorna um erro se a chave price não estiver declarada e a resposta da requisição com a mensagem "O campo price é obrigatório"', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "name": "Jaboq",
        "description": {
          "rating": 3,
          "difficulty": "Fácil",
          "createdAt": "25/08/2022"
        }
    });
    expect(res.status).to.be.equal(400);
    expect(res.body.message).to.be.equal("O campo price é obrigatório");
  });

  it('retorna um erro se price for menor que zero "O campo price deve ser um número maior ou igual a zero"', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "name": "Jaboq",
        "price": -1,
        "description": {
          "rating": 3,
          "difficulty": "Fácil",
          "createdAt": "25/08/2022"
        }
    });
    expect(res.status).to.be.equal(400);
    expect(res.body.message).to.be.equal("O campo price deve ser um número maior ou igual a zero");
  });

  it('retorna um erro se o campo description não for preenchido totalmente', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "name": "Jaboq",
        "price": 2,
    });
    expect(res.status).to.be.equal(400);
    expect(res.body.message).to.be.equal("O campo description com as chaves createdAt, rating e difficulty são obrigatórios");
  });

  it('retorna um erro se o campo createdAt não estiver com data válida no formato dd/mm/aaaa', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "name": "Jaboq",
        "price": 5,
        "description": {
          "rating": 3,
          "difficulty": "Fácil",
          "createdAt": "25.08.2022"
        }
    });
    expect(res.status).to.be.equal(400);
    expect(res.body.message).to.be.equal("O campo createdAt deve ter o formato \'dd/mm/aaaa\'");
  });

  it('retorna um erro se o campo rating não tem um numero inteiro entre 1 - 5', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "name": "Jaboq",
        "price": 5,
        "description": {
          "rating": 10,
          "difficulty": "Fácil",
          "createdAt": "25/08/2022"
        }
    });
    expect(res.status).to.be.equal(400);
    expect(res.body.message).to.be.equal("O campo rating deve ser um número inteiro entre 1 e 5");
  });

  it('retorna erro caso o campo difficulty não tiver apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”', async function () {
    const res = await chai.request(app).post('/activities')
      .send({
        "name": "Jaboq",
        "price": 5,
        "description": {
          "rating": 3,
          "difficulty": "muito facil",
          "createdAt": "25/08/2022"
        }
    });
    expect(res.status).to.be.equal(400);
    expect(res.body.message).to.be.equal("O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'");
  });

});



// Crie um middleware de validação para a chave difficulty. Ela deve:

//     Ter apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”;
//     Retornar o status 400 e uma mensagem em formato json;
//         Sugestão: { "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" }.


