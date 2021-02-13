import React, { Component } from 'react'
import './App.css'

export default class PokeItem extends Component {
    render() {
        return (
            <li className="pokemonItems">
                <p className="title">{this.props.pokemomItemProp.pokemon}</p>
                <img src={this.props.pokemomItemProp.url_image} alt={this.props.pokemomItemProp.pokemon}></img>
                <p className="typeText">TYPE: {this.props.pokemomItemProp.type_1}</p>
                <p className="typeText">SHAPE: {this.props.pokemomItemProp.shape}</p>
                <p className="typeText">ABILITY: {this.props.pokemomItemProp.ability_1}</p>

            </li>
        )
    }
}
