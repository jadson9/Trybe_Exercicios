//Escreva um teste que verifique a chamada da callback de uma função uppercase,
// que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter
// cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };



it('verifica se a palavra esta em cxaixa alta' , (done) => {
  
    try {
      expect(uppercase('jadson', setTimeout((elem) => elem, 500))).toBe('JADSON');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  
})

