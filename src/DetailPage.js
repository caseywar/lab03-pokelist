import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';


export default class DetailPage extends Component {
    state = {
        pokemonData: {}
    }

    componentDidMount = async () => {
        this.setState({ loading: true });


        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            pokemonData: data.body.results.find(item =>
                item.pokemon === this.props.match.params.pokemonName),
        });
    }

    render() {
        return (
            <div>
                <h2>Pokemon DETAILS Page</h2>
                {
                    this.state.loading
                        ? <Spinner />
                        : <div className="pokemonDetails">
                            <img src={this.state.pokemonData.url_image} alt="pokemon" />
                            <p>
                                <span className="detailsCategory">Name:</span> {this.state.pokemonData.pokemon}
                            </p>
                            <p>
                                <span className="detailsCategory">Attack:</span> {this.state.pokemonData.attack}
                            </p>
                            <p>
                                <span className="detailsCategory">Defense:</span> {this.state.pokemonData.defense}
                            </p>
                            <p>
                                <span className="detailsCategory">Type 1:</span> {this.state.pokemonData.type_1}
                            </p>
                            <p>
                                <span className="detailsCategory">Type 2:</span> {this.state.pokemonData.type_2}
                            </p>
                            <p>
                                <span className="detailsCategory">Shape:</span> {this.state.pokemonData.shape}
                            </p>
                            <p>
                                <span className="detailsCategory">Ability 1:</span> {this.state.pokemonData.ability_1}
                            </p>
                            <p>
                                <span className="detailsCategory">Ability 2:</span> {this.state.pokemonData.ability_2}
                            </p>
                        </div>
                }

            </div>
        )
    }
}
