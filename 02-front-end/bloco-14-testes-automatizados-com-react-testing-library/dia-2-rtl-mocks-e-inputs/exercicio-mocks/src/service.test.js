let numeroAleatorio  = require('./service')

describe('Testando retorno da Função', () => {
  test('testa se o retorno é dentro de valor maximo e minimo', () => {
    const max = 50;
    const min = 0;
    const nA = numeroAleatorio(max, min);
    expect(nA >= min && nA <= max).toEqual(true);
  })

  test('testa se a função retorna o numero 10', () => {
    numeroAleatorio = jest.fn().mockReturnValue(10);
    expect(numeroAleatorio()).toBe(10)
  })

  test('tVerifica se a função foi chamada', () => {
    expect(numeroAleatorio).toHaveBeenCalledTimes(1)
  })
})