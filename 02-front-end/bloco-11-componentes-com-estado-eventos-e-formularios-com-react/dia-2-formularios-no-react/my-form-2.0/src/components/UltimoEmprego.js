import React from "react";

class UltimoEmprego extends React.Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      cargoDescricao: '',
      controlAlert: 0,
    }
  }

  hadleChange = (event) => {
    const { value, name } = event.target
    this.setState({
        [name]: name === 'endereco' 
        ? value.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        : value.toUpperCase(),
    })
  }
  alerta = () => {
    const { controlAlert } = this.state;
    if ( controlAlert === 0) {
      alert('Preencha esse campo com cuidado')
    }
    this.setState({ controlAlert: 1 })
  }

  render() {
    const { curriculo, cargo, cargoDescricao } = this.state
    const maxCaracterCurriculo = 1000;
    const maxCaracterCargo = 40;
    const maxCaracterCargoDescricao = 500;

    return (
      <fieldset>

        <legend>Ultimo Emprego</legend>
        <label>
          Resumo do currículo
          <textarea value={ curriculo } name="curriculo" onChange={ this.hadleChange } />
          {curriculo === '' && <span>Campo Obrigatório</span>}
          {curriculo.length > maxCaracterCurriculo && <span>Texto muito grande, digite menos que 40 caracteres</span>}
        </label>

        <br />

        <label>
          Cargo
          <textarea value={ cargo } name="cargo" onChange={ this.hadleChange } onMouseEnter={ this.alerta} />
          {cargo === '' && <span>Campo Obrigatório</span>}
          {cargo.length > maxCaracterCargo && <span>Texto muito grande, digite menos que 40 caracteres</span>}
        </label>

        <br />

        <label>
          Descrição do cargo
          <input type="text" value={ cargoDescricao } name="cargoDescricao" onChange={ this.hadleChange } />
          {cargoDescricao === '' && <span>Campo Obrigatório</span>}
          {cargoDescricao.length > maxCaracterCargoDescricao && <span>Texto muito grande, digite menos que 40 caracteres</span>}
        </label>

      </fieldset>
    )
  }
}

export default UltimoEmprego;