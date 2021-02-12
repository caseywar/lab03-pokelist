import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink exact activeClassName="selected" to="/">
                    Home
            </NavLink>
                <NavLink exact activeClassName="selected" to="/search">
                    Search Page
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
