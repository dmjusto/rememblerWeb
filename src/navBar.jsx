import React, { Component } from 'react';
import './navBar.css';

export default class navBar extends Component {
    render() {
        return (
            <header className='navBar'>
                <h1>RemembleR</h1>
                <div id="navBar-icons">
                    <i class="fas fa-user-friends"></i>
                    <i class="fas fa-user"></i>
                </div>
            </header>
        )
    }
}
