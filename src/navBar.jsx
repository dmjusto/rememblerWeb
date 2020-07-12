import React, { Component } from 'react';
import './navBar.css';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export default class navBar extends Component {
    render() {
        return (
            <header className='navBar'>
                <h1>Remembler</h1>
                <div id="navBar-icons">
                    <PeopleAltIcon className='icon'/>
                    <PersonIcon className='icon'/>
                </div>
            </header>
        )
    }
}
