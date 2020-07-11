import React, { Component } from 'react';
import './card.css';

export default class card extends Component {
    static defaultProps = {
        frontContent: 'front',
        backContent: 'back',
        parentFolder: 'test folder',
        parentDeck: 'test deck'
    }

    constructor(props){
        super(props);
        this.state = {
            isFront: true
        }
    }

    render() {
        return (
            <div className='card'>
                {this.state.isFront ? <h2>{this.props.frontContent}</h2> : <h2>{this.props.backContent}</h2> }
                <div className="cardHeader">
                    <span className='headerText parentFolder'>{this.props.parentFolder} {" > "}</span>
                    <span className='headerText parentDeck'><em>{this.props.parentDeck}</em></span>
                </div>
            </div>
        )
    }
}