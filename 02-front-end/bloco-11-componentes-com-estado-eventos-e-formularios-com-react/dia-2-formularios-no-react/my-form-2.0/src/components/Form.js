import React from 'react';
import UltimoEmprego from './UltimoEmprego';

const states = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goías' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraíma' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
];
const siglaEstado = states.map((el) => {
  return [ el.value, el.label ]
})

// const sigraEstado = Object.keys(states)

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    }
  }

  verificaNumero = () => {
    const { cidade } = this.state;
    this.setState({
      cidade: isNaN(cidade[0]) === false ? '' : cidade, 
    })
  }

  hadleChange = (event) => {
    const { value, name } = event.target
    this.setState({
        [name]: name === 'endereco' 
        ? value.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        : value.toUpperCase(),
    })
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state
    const maxCaracterName = 40;
    const maxCaracterEmail = 50;
    const maxCaracterCpf = 11;
    const maxCaracterEndereco = 200;
    const maxCaracterCidade = 28;
    
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label>
            Nome:
            <input name='nome' onChange={ this.hadleChange } type='text' value={ nome } />
            {nome === '' && <span>Campo Obrigatório</span>}
            {nome.length > maxCaracterName && <span>Texto muito grande, digite menos que 40 caracteres</span>}
          </label>

          <br />

          <label>
            Email:
            <input name='email' onChange={ this.hadleChange } type='email' value={ email } />
            {email === '' && <span>Campo Obrigatório</span>}
            {email.length > maxCaracterEmail && <span>Email muito grande, digite menos que 50 caracteres</span>}
          </label>

          <br />

          <label>
            CPF:
            <input name='cpf' onChange={ this.hadleChange } type='text' value={ cpf } />
            {cpf === '' && <span>Campo Obrigatório</span>}
            {cpf.length > maxCaracterCpf && <span>CPF muito grande, digite menos que 11 Numeros</span>}
          </label>

          <br />

          <label>
            Endereço:
            <input name='endereco' onChange={ this.hadleChange } type='text' value={ endereco } />
            {endereco === '' && <span>Campo Obrigatório</span>}
            {endereco.length > maxCaracterEndereco && <span>CPF muito grande, digite menos que 11 Numeros</span>}
          </label>

          <br />

          <label>
            Cidade:
            <input name='cidade' onBlur={ this.verificaNumero } onChange={ this.hadleChange } type='text' value={ cidade } />
            {cidade === '' && <span>Campo Obrigatório</span>}
            {cidade.length > maxCaracterCidade && <span>CPF muito grande, digite menos que 11 Numeros</span>}
          </label>

          <br />

          <label>
            Estado:
            <select name='estado' onChange={ this.hadleChange } value={ estado }>
              {siglaEstado.map((elem) => <option key={elem[0]} value={elem[0]}>{elem[1]}</option>)}
            </select>
            {estado === '' && <span>Campo Obrigatório</span>}
            {/* {cidade.length > maxCaracterCidade && <span>CPF muito grande, digite menos que 11 Numeros</span>} */}
          </label>

        </fieldset>
        <UltimoEmprego />
      </form>
    )
  }
}

// Form.propTypes = {
//   name: PropTypes.string.isRequired
// };

export default Form;