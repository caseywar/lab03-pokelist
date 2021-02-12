import React, { Component } from 'react'
import pokemon from './pokemon.js'
import PokeItem from './PokeItem.js'


export default class PokeList extends Component {
    state = {
        pokemon: [],
        query: '',
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    }
    render() {
        const filteredPokemon = this.state.pokemon.filter(pokemon => pokemon.pokemon.includes(this.state.query))
        return (

            < ul className='list' >
                {
                    pokemon.map(pokeObject =>
                        <PokeItem
                            key={pokeObject.pokemon}
                            pokemomItemProp={pokeObject}
                        />)
                }
            </ul >
        )
    }
}
