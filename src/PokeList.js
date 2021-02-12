import React, { Component } from 'react'
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
        const filteredPokemon = this.props.pokemon.filter(pokemon => pokemon.pokemon.includes(this.state.query))

        return (
            <>
                <input onChange={this.handleInputChange} />

                <ul className='list' >
                    {
                        filteredPokemon.map(pokeObject =>
                            <PokeItem
                                key={pokeObject.pokemon}
                                pokemomItemProp={pokeObject}
                            />)
                    }
                </ul>
            </>
        )
    }
}
