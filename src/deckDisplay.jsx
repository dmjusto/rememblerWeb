import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Card from './card';
import DeckBlank from './deckBlank';
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
            // cardIndex: 0,
            facingForward: true,
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.flipCard = this.flipCard.bind(this);
    }

    handlePrev(){
        // const currIndex = this.state.cardIndex;
        // let prevIndex = currIndex - 1;
        // if(prevIndex < 0) prevIndex = this.state.cards.length - 1;
        // this.setState({cardIndex: prevIndex, facingForward: true});
    }

    handleNext(){
        // const currIndex = this.state.cardIndex;
        // const nextIndex = (currIndex + 1) % this.state.cards.length;
        // this.setState({cardIndex: nextIndex, facingForward: true});
    }

    handleDelete(){
        const newDeck = this.state.cards;
        newDeck.pop();
        this.setState({
            cards: newDeck
        })
    }

    flipCard(){
        this.setState(state => ({
            facingForward: !state.facingForward
        }))
    }

    render() {
        const {cards, facingForward} = this.state;
        const deckSize = cards.length;
        const cardIndex = deckSize - 1;
        let cardContent = cards[cardIndex];
        return (
            <div className='deckDisplay'>
                <div className="cardContent-edit">
                    <Tooltip title='add flashcard' placement='top-start' arrow TransitionComponent={Zoom}>
                        <Fab className='btn' size='small' disableRipple='true'><AddIcon/></Fab>
                    </Tooltip>
                    <Tooltip title='delete flashcard' placement='top-start' arrow TransitionComponent={Zoom}>
                        <Fab 
                            className='btn' 
                            size='small' 
                            disableRipple='true' 
                            onClick={this.handleDelete}
                            disabled={deckSize <= 0}
                        >
                            <DeleteIcon/>
                        </Fab>
                    </Tooltip>
                    <Tooltip title='edit flashcard' placement='top-start' arrow TransitionComponent={Zoom}>
                        <Fab className='btn' size='small' disableRipple='true'><EditIcon/></Fab>
                    </Tooltip>
                </div>
                
                {cards.length > 0 ?
                  <Card {...cardContent} facingForward={facingForward} handleClick={this.flipCard}/> : <DeckBlank/>
                }
                

                <div id="deckNavigation">
                    <Fab className='btn' aria-label='previous flashcard' disableRipple='true' onClick={this.handlePrev}>
                        <NavigateBeforeIcon/>
                    </Fab>

                    <Fab className='btn' aria-label="next flashcard" disableRipple='true' onClick={this.handleNext}>
                        <NavigateNextIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}
