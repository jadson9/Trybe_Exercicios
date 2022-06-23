import React, { Component } from "react";
import pokemons from "../data";
import './Pokemon.css'

class Pokemon extends Component {
  constructor() {
      super()
      this.proximoPoke = this.proximoPoke.bind(this)
      this.state = {
          poke: 0,
          filtro: ''
      }
  }

  proximoPoke() {
    // if (this.state.poke === pokemons.length - 1) {
    //     poke: 0
    // }
    // poke: anterior.poke + 1
    this.setState((anterior, _props) => ({
        poke: this.state.poke === pokemons.filter((elem) => 
        elem.name.includes(this.state.filtro)).length -1 ? 0 : anterior.poke + 1
    }))
    console.log(this.state.poke)
  }


  render() {
    return (
        <>
            {pokemons.filter((elem) => 
                elem.name.includes(this.state.filtro)
            )
                
                .slice(this.state.poke, this.state.poke +1 ).map((elem1) => {
                return (
                      <div key={elem1.id} className="card-pokemon">
                        <div id="info-pokemon">
                            <h2 className="nome">Nome: {elem1.name}</h2>
                            <p className="tipo">Tipo: {elem1.type}</p>
                            <p className="peso">Peso: {elem1.averageWeight.value}
                              {elem1.averageWeight.measurementUnit}</p>
                        </div>
                        <img className="img-pokemon" src={elem1.image}></img>
                      </div>
                )
            })}
            <button onClick={ this.proximoPoke }>Proximo Pokemon</button>
        </>
    )
  }
}

export default Pokemon

// {pokemons.filter((elem) => elem.name.includes('Pikachu')  ).map((elem1) => {
//     return (
//         <div key={elem1.id} className="card-pokemon">
//             <div id="info-pokemon">
//                 <h2 className="nome">Nome: {elem1.name}</h2>
//                 <p className="tipo">Tipo: {elem1.type}</p>
//                 <p className="peso">Peso: {elem1.averageWeight.value} {elem1.averageWeight.measurementUnit}</p>
//             </div>
//             <img className="img-pokemon" src={elem1.image}></img>
//         </div>
//     )
// })}