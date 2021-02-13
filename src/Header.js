import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink exact activeClassName="selected" to="/">
                    HOME
            </NavLink>
                <br></br>
                <NavLink exact activeClassName="selected" to="/search">
                    SEARCHPAGE
                </NavLink>
                {/* {
                    this.props.location.pathname !== '/search' && <NavLink exact activeClassName="selected" to="/search">
                        Search
                </NavLink>
                } */}

                {/* {
                    this.props.location.pathname === '/search' && <a href="https://www.pokemon.com/us/pokedex/">Official Pokedex™ Website </a>
                } */}
            </header>
        )
    }
}
