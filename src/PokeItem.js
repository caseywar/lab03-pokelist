import React, { Component } from 'react'
import './App.css'

export default class PokeItem extends Component {
    render() {
        return (
            <li>
                <p>{this.props.pokemomItemProp.pokemon}</p>
                <img src={this.props.pokemomItemProp.url_image} alt={this.props.pokemomItemProp.pokemon}></img>
                <p>pokemon type:{this.props.pokemomItemProp.type_1}</p>
            </li>
        )
    }
}
