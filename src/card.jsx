import React, { Component } from 'react';
import './card.css';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplayIcon from '@material-ui/icons/Replay';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

export default class card extends Component {
    static defaultProps = {
        frontContent: 'front',
        backContent: 'back',
        parentFolder: 'test folder',
        parentDeck: 'test deck'
    }

    render() {
        const {facingForward, handleClick, handleDelete, frontContent, backContent} = this.props;
        return (
            <div className={`card ${!facingForward  && 'isFlipped'}`} onClick={handleClick}>
                <div className='card-face card-face-front'>
                    <h2>{frontContent}</h2>
                    <div className="cardHeader">
                        <div>
                            <span className='headerText parentFolder'>{this.props.parentFolder} {" > "}</span>
                            <span className='headerText parentDeck'><em>{this.props.parentDeck}</em></span>
                        </div>
                        <Tooltip title='delete card' placement='top-end' arrow TransitionComponent={Zoom}>
                            <DeleteIcon className='icon' onClick={handleDelete}/>
                        </Tooltip>
                        
                    </div>
                </div>

                <div className='card-face card-face-back'>
                    <h2>{backContent}</h2>
                    <div className="cardHeader">
                        <div>
                            <span className='headerText parentFolder'>{this.props.parentFolder} {" > "}</span>
                            <span className='headerText parentDeck'><em>{this.props.parentDeck}</em></span>
                        </div>
                        <Tooltip title='delete card' placement='top-end' arrow TransitionComponent={Zoom}>
                            <DeleteIcon className='icon' onClick={handleDelete}/>
                        </Tooltip>
                        
                    </div>
                </div>


            </div>
            
        )
    }
}
