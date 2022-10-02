const app = require('../app');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const chai = require('chai');

chai.use(chaiHttp);

describe('Testes api de chocolates.', function () {

  it('retorna a quantidade total de chocolates', async function () {
    const response = await chai.request(app).get('/chocolates/total')
    expect(response.body.totalChocolates).to.be.equal(4)
  });

  it('verifica o status 200', async function () {
    const response = await chai.request(app).get('/chocolates/total')
    expect(response.status).to.be.equal(200)
  })

})
