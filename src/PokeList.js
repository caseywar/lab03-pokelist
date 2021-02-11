import React, { Component } from 'react'
import pokemon from './pokemon.js'
import PokeItem from './PokeItem.js'


export default class PokeList extends Component {
    render() {
        return (
            <ul className='list'>
                { pokemon.map(pokeObject =>
                    <PokeItem
                        key={pokeObject.pokemon}
                        pokemomItemProp={pokeObject}
                    // name={pokeItem.pokemon}
                    // picture={PokeItem.url_image}
                    // type={PokeItem.type_1} />)
                    />)}
            </ul>
        )
    }
}
