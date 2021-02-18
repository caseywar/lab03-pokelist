import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return (

            <Link to={`/pokemon/${this.props.pokemon.pokemon}`} className="pokemonItems">
                <div key={this.props.pokemon.pokebase}>

                    <div>
                        <img src={this.props.pokemon.url_image} alt="poke" />
                    </div>
                    <span className="cardTitle">{this.props.pokemon.pokemon}</span>
                    <div className="cardDetails">
                        <p>Type: {this.props.pokemon.type_1}</p>
                        <p>Shape: {this.props.pokemon.shape}</p>
                        <p>Ability: {this.props.pokemon.ability_1}</p>
                    </div>


                </div>
            </Link>
        )
    }
}

