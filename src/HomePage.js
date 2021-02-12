import React, { Component } from 'react'
import './App.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                WELCOME TO YOUR POKEDEX
                <br></br>
                <img className="pokedexImage" src="./pokedex.jpg" alt="pokedex"></img>

            </div>
        )
    }
}
