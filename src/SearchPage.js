import React, { Component } from 'react'
// import PokeList from './PokeList.js'
import pokemon from './pokemon.js'
import './App.css';
// import Dropdown from './Dropdown.js'
import request from 'superagent';
import Spinner from './Spinner.js'



export default class SearchPage extends Component {
    state = {
        pokemon: [],
        query: '',
        loading: false,
        // sortBy: 'pokemon',
        // sortOrder: 'Ascend'
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`);

        this.setState({
            loading: false,
            pokemon: data.body.results,
        });
    }

    handleClick = async () => {
        await this.fetchPokemon();
    }



    handleInputChange = async (e) => {
        this.setState({
            query: e.target.value,
        });
    }



    // handleDirectionSort = (e) => {
    //     this.setState({
    //         sortOrder: e.target.value,
    //     });
    // }

    // handleSortBy = (e) => {
    //     this.setState({
    //         sortBy: e.target.value,
    //     });
    // }

    render() {
        // if (this.state.sortOrder === 'Ascend') {
        //     pokemon.sort(
        //         (a, b) =>
        //             a[this.state.sortBy].localeCompare(b[this.state.sortBy])
        //     );
        // }
        // if (this.state.sortOrder === 'Descend') {
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

                            {/* <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleDirectionSort} options={['Ascend', 'Descend']} />
                            <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleSortBy} options={['Name', 'type_1', 'shape', 'ability_1']} /> */}
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
