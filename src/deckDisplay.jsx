import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import AddIcon from '@material-ui/icons/Add';
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
                {frontContent: 'Card 3 front', backContent: 'Card 3 back', facingForward: true},
                {frontContent: 'Card 2 front', backContent: 'Card 2 back', facingForward: true},
                {frontContent: 'Card 1 front', backContent: 'Card 1 back', facingForward: true}
            ],
            discard: [],
            // facingForward: true,
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.flipCard = this.flipCard.bind(this);
    }

    handlePrev(){
        this.setState({
            cards: [...this.state.cards, this.state.discard.pop()],
            // facingForward: true
        })
    }

    handleNext(){
        this.setState({
            discard: [...this.state.discard, this.state.cards.pop()],
            // facingForward: true
        })
    }

    handleDelete(e){
        e.stopPropagation();
        const newDeck = this.state.cards;
        newDeck.pop();
        this.setState({
            cards: newDeck
        })
    }

    flipCard(){
        const lastCardIndex = this.state.cards.length - 1;
        const flippedCard = this.state.cards[lastCardIndex];
        flippedCard.facingForward = !flippedCard.facingForward;

        this.setState(state => ({
            cards: [...state.cards.slice(0, lastCardIndex), flippedCard]
        }))
    }

    render() {
        const {cards, discard, facingForward} = this.state;
        const deckSize = cards.length;
        const discardSize = discard.length;
        const cardIndex = deckSize - 1;
        let cardContent = cards[cardIndex];
        let secondCardContent = cards[cardIndex - 1]
        return (
            <div className='deckDisplay'>
                <div className="cardContent-edit">
                    <Tooltip title='add flashcard' placement='top-start' arrow TransitionComponent={Zoom}>
                        <Fab className='btn' size='small' disableRipple='true'><AddIcon/></Fab>
                    </Tooltip>
                
                    <Tooltip title='edit flashcard' placement='top-start' arrow TransitionComponent={Zoom}>
                        <Fab className='btn' size='small' disableRipple='true'><EditIcon/></Fab>
                    </Tooltip>
                </div>

                <div className="deck">
                    {/* {cards.length > 1 &&
                        <Card 
                            {...secondCardContent} 
                            facingForward={true} 
                            handleClick={this.flipCard}
                            handleDelete={this.handleDelete}
                        />
                    } */}

                    {cards.length > 0 &&
                        <Card 
                            {...cardContent} 
                            // facingForward={facingForward} 
                            handleClick={this.flipCard}
                            handleDelete={this.handleDelete}
                         />
                    }

                    {/* <DeckBlank/> */}
                </div>
                
                
                

                <div id="deckNavigation">
                    <Fab 
                        color='secondary'
                        disableRipple='true'
                        className='btn' 
                        aria-label='previous flashcard' 
                        onClick={this.handlePrev}
                        disabled={discardSize <= 0}
                    >
                        <NavigateBeforeIcon/>
                    </Fab>

                    <Fab 
                        color='secondary'
                        disableRipple='true'
                        className='btn' 
                        aria-label="next flashcard" 
                        onClick={this.handleNext}
                        disabled={deckSize <= 0}
                    >
                        <NavigateNextIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}
