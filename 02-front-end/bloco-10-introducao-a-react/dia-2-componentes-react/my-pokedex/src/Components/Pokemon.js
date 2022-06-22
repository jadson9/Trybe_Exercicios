import React, { Component } from "react";
import pokemons from "../data";

class Pokemon extends Component {
  render() {
    return (
        <>
            {pokemons.map((elem) => {
                return (
                    <>
                        <h2>Nome: {elem.name}</h2>
                        <img src={elem.image}></img>
                        <p>Tipo: {elem.type}</p>
                        <p>Peso: {elem.averageWeight.value} {elem.averageWeight.measurementUnit}</p>
                    </>
                )
            })}
        </>
    )
  }
}

export default Pokemon