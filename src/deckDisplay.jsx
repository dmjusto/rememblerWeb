import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Card from './card';
import './deckDisplay.css';

export default class deckDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {frontContent: 'Card 1 front', backContent: 'Card 1 back'},
                {frontContent: 'Card 2 front', backContent: 'Card 2 back'},
                {frontContent: 'Card 3 front', backContent: 'Card 3 back'}
            ],
            discard: [],
            cardIndex: 0
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handlePrev(){
        const currIndex = this.state.cardIndex;
        let prevIndex = currIndex - 1;
        if(prevIndex < 0) prevIndex = this.state.cards.length - 1;
        this.setState({cardIndex: prevIndex});
    }

    handleNext(){
        const currIndex = this.state.cardIndex;
        const nextIndex = (currIndex + 1) % this.state.cards.length;
        this.setState({cardIndex: nextIndex});
    }

    render() {
        const {cards, cardIndex} = this.state;
        let cardContent = cards[cardIndex];
        return (
            <div className='deckDisplay'>
                <Card {...cardContent}/>
                <div id="deckNavigation">
                    <Fab className='btn' aria-label='previous flashcard' onClick={this.handlePrev}>
                        <NavigateBeforeIcon/>
                    </Fab>

                    <Fab className='btn' aria-label="next flashcard" onClick={this.handleNext}>
                        <NavigateNextIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}
