import React, { Component } from 'react'
import PokeList from './PokeList.js'
import './App.css';
import Dropdown from './Dropdown.js'
import request from 'superagent';
import Spinner from './Spinner.js'



export default class SearchPage extends Component {
    state = {
        pokemonData: [],
        query: '',
        loading: false,
        sortBy: 'pokemon',
        sortOrder: 'asc',
        currentPage: 1,
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }


    fetchPokemon = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&direction=${this.state.sortOrder}&sort=${this.state.sortBy}&page=${this.state.currentPage}&perPage=50`);

        this.setState({
            loading: false,
            pokemonData: data.body.results,
        });
    }


    handleClick = async () => {
        await this.fetchPokemon();
    }


    handleSortBy = async (e) => {
        await this.setState({
            sortBy: e.target.value,
        });
        await this.fetchPokemon();
    }

    handleDirectionSort = async (e) => {
        await this.setState({
            sortOrder: e.target.value,
        });
        await this.fetchPokemon();
        console.log(this.state.sortOrder, 'order')
    }

    handleInputChange = async (e) => {
        await this.setState({
            query: e.target.value.toLowerCase(),
        });
    }


    handleNextClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        });

        await this.fetchPokemon();
    }

    handlePreviousClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        });
        await this.fetchPokemon();
    }


    render() {
        const {
            pokemonData,
            loading,
        } = this.state;

        return (
            <>

                <main className="searchMain">
                    <div className="sidebar">
                        <div>
                            <label>
                                <span className="searchTitle">Search Pokemon</span>

                                <input onChange={this.handleInputChange} />

                                <button onClick={this.handleClick}>Search</button>

                                <h3> Page{this.state.currentPage}</h3>
                                <button onClick={this.handlePreviousClick}>Previous</button>
                                <button onClick={this.handleNextClick}>Next</button>
                            </label>

                            <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleDirectionSort} options={['asc', 'desc']} />
                            <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleSortBy} options={['pokemon', 'type_1', 'shape', 'ability_1']} />
                        </div>
                    </div>


                    <div className="newList">
                        {loading
                            ? <Spinner />
                            : <PokeList pokemonData={pokemonData} />
                        }
                    </div>

                    {/* <PokeList filteredPokemon={filteredPokemon} /> */}
                </main>

            </>
        )
    }
}
