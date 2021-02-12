import React, { Component } from 'react'
import PokeList from './PokeList.js'
import pokemon from './pokemon.js'
import './App.css';

export default class SearchPage extends Component {


    render() {
        return (
            <div>
                Search Pokemon
                
                <PokeList pokemon={pokemon} />
            </div>
        )
    }
}
