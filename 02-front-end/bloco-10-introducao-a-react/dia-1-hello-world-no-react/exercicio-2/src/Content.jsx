import React, { Component } from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends Component {
    render() {
        return (
            <p> 
                {   conteudos.map((elem) => {
                    let cont = elem.conteudo
                    let stat = elem.status
                    let bloc = elem.bloco
                    return {cont, stat, bloc}
                })}
            </p>
        )
    }
}

export default Content 