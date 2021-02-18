import React, { Component } from 'react'
import PokeList from './PokeList.js'
import './App.css';
import Dropdown from './Dropdown.js'
import request from 'superagent';
import Spinner from './Spinner.js'



export default class SearchPage extends Component {
    state = {
        pokemonData: [],
        totalPokemon: 0,
        perPage: 10,
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

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&direction=${this.state.sortOrder}&sort=${this.state.sortBy}&page=${this.state.currentPage}&perPage=${this.state.perPage}`);

        this.setState({
            loading: false,
            pokemonData: data.body.results,
            totalPokemon: data.body.count
        });
    }


    handleClick = async () => {
        await this.setState({ currentPage: 1 });

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

    handlePerPage = (e) => {
        this.setState({ perPage: e.target.value })
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

        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);

        return (
            <>

                <main className="searchMain">
                    <div className="sidebar">
                        <div>
                            <label>
                                <span className="searchTitle">Search Pokemon</span>

                                <input onChange={this.handleInputChange} />
                                <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleDirectionSort} options={['asc', 'desc']} />
                                <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleSortBy} options={['pokemon', 'type_1', 'shape', 'ability_1']} />

                                <span className="searchTitle">Results per page:</span>
                                <select onChange={this.handlePerPage}>
                                    <option value={10}>10</option>
                                    <option value={50}>50</option>
                                    <option value={75}>75</option>
                                    <option value={100}>100</option>
                                </select>


                                <button onClick={this.handleClick}>Search</button>

                                <h3> Page{this.state.currentPage}</h3>
                                <button onClick={this.handlePreviousClick} disabled={this.state.currentPage === 1}>Previous</button>

                                <button onClick={this.handleNextClick} disabled={this.state.currentPage === lastPage}>Next</button>
                            </label>


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
