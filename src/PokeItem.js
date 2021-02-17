import React, { Component } from 'react'
import './App.css'

export default class PokeItem extends Component {
    render() {
        const {
            pokemon,
            url_image,
            type_1
        } = this.props;

        return (
            <div key={pokemon}>
                <div>
                    <img src={url_image} alt="poke" />
                </div>
                {pokemon} : {type_1}
            </div>
        )
    }
}

