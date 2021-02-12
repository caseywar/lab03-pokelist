import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import Dropdown from './Dropdown.js'
import pokemon from './pokemon.js'


export default class PokeList extends Component {
    state = {
        pokemon: [],
        query: '',
        sortBy: 'pokemon',
        sortOrder: 'Ascend'
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    }



    handleDirectionSort = (e) => {
        this.setState({
            sortOrder: e.target.value,
        });
    }

    handleSortBy = (e) => {
        this.setState({
            sortBy: e.target.value,
        });
    }


    render() {
        if (this.state.sortOrder === 'Ascend') {
            pokemon.sort(
                (a, b) =>
                    a[this.state.sortBy].localeCompare(b[this.state.sortBy])
            );
        }
        if (this.state.sortOrder === 'Descend') {
            pokemon.sort(
                (a, b) =>
                    b[this.state.sortBy].localeCompare(a[this.state.sortBy])
            );
        }


        const filteredPokemon = this.props.pokemon.filter(pokemon => pokemon.pokemon.includes(this.state.query))

        return (
            <form>

                <div>
                    <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleDirectionSort} options={['Ascend', 'Descend']} />
                    <Dropdown currentValue={this.state.sortOrder} handleChanges={this.handleSortBy} options={['pokemon', 'type_1']} />
                </div>


                <input onChange={this.handleInputChange} />

                <ul className='list' >
                    {
                        filteredPokemon.map(pokeObject =>
                            <PokeItem
                                key={pokeObject.pokemon}
                                pokemomItemProp={pokeObject}
                            />)
                    }
                </ul>
            </form>
        )
    }
}
