import React, { Component } from 'react'
// import PokeList from './PokeList.js'
import pokemon from './pokemon.js'
import './App.css';
import Dropdown from './Dropdown.js'
import request from 'superagent';
import Spinner from './Spinner.js'



export default class SearchPage extends Component {
    state = {
        pokemon: [],
        query: '',
        loading: false,
        sortBy: 'pokemon',
        sortOrder: 'asc'
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
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


    fetchPokemon = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&direction=${this.state.sortOrder}&sort=${this.state.sortBy}`);

        console.log(data.body.results, 'fetch data')

        this.setState({
            loading: false,
            pokemon: data.body.results,
        });
    }


    render() {
        // if (this.state.sortOrder === 'asc') {
        //     pokemon.sort(
        //         (a, b) =>
        //             a[this.state.sortBy].localeCompare(b[this.state.sortBy])
        //     );
        // }
        // if (this.state.sortOrder === 'desc') {
        //     pokemon.sort(
        //         (a, b) =>
        //             b[this.state.sortBy].localeCompare(a[this.state.sortBy])
        //     );
        // }


        // const filteredPokemon = pokemon.filter(pokemon => pokemon.pokemon.includes(this.state.query))


        return (
            <>

                <main className="searchMain">
                    <div className="sidebar">
                        <div>
                            <label>
                                <span className="searchTitle">Search Pokemon</span>

                                <input onChange={this.handleInputChange} />
                                <button onClick={this.handleClick}>Search</button>
                            </label>

                            <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleDirectionSort} options={['asc', 'desc']} />
                            <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleSortBy} options={['pokemon', 'type_1', 'shape', 'ability_1']} />
                        </div>
                    </div>


                    <div>
                        {
                            this.state.loading
                                ? <Spinner />
                                : this.state.pokemon.map(poke =>

                                    <div key={pokemon.pokemon}>
                                        <div>
                                            <img src={poke.url_image} alt="poke" />
                                        </div>
                                        {poke.pokemon} :{poke.type_1}
                                    </div>)
                        }
                    </div>

                    {/* <PokeList filteredPokemon={filteredPokemon} /> */}
                </main>

            </>
        )
    }
}
