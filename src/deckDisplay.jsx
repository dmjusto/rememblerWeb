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
                {frontContent: 'Card 3 front', backContent: 'Card 3 back', facingForward: true, discarded: false},
                {frontContent: 'Card 2 front', backContent: 'Card 2 back', facingForward: true, discarded: false},
                {frontContent: 'Card 1 front', backContent: 'Card 1 back', facingForward: true, discarded: false}
            ],
            discard: [],
        }

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.popCard = this.popCard.bind(this);
        this.revealCard = this.revealCard.bind(this);
    }

    popCard(){
        this.setState({
            discard: [...this.state.discard, this.state.cards.pop()]
        })
    }

    revealCard(){
        const lastCardIndex = this.state.cards.length - 1;
        const enCardedCard = this.state.cards[lastCardIndex];
        enCardedCard.discarded = false;

        this.setState({
            cards: [...this.state.cards.slice(0, lastCardIndex), enCardedCard]
        })
    }

    handlePrev(){

        this.setState({
            cards: [...this.state.cards, this.state.discard.pop()]
        }, () => {(
            setTimeout( this.revealCard)
        )})
    }

    handleNext(){
        if(!this.state.cards[this.state.cards.length -1].facingForward){
            this.flipCard();
            setTimeout(this.handleNext, 500);
        }
        else{
            const lastCardIndex = this.state.cards.length - 1;
            const discardedCard = this.state.cards[lastCardIndex];
            discardedCard.discarded = true;
    
            this.setState(state => ({
                cards: [...state.cards.slice(0, lastCardIndex), discardedCard]
            }), () => {(
                setTimeout(this.popCard, 500)
            )})
        }


        


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

                    

                    {cards.map(c => (
                        <Card 
                            {...c} 
                            handleClick={this.flipCard}
                            handleDelete={this.handleDelete}
                            />
                    ))}
                    
                    {/* {cards.length > 0 && <Card {...cardContent} handleClick={this.flipCard} handleDelete={this.handleDelete}/>} */}
                    <DeckBlank/>
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
