import React, { Component } from 'react'
import PokeItem from './PokeItem.js'


export default class PokeList extends Component {



    render() {


        return (
            <div>


                <ul className='list' >
                    {
                        this.props.filteredPokemon.map(pokeObject =>
                            <PokeItem
                                key={pokeObject.pokemon}
                                pokemomItemProp={pokeObject}
                            />)
                    }
                </ul>
            </div>
        )
    }
}
