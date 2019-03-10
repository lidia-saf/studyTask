import * as React from 'react';
import { GameManagerTemplate } from './GameManagerTemplate';

export class GameManagerBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startingPopupShown: true,
            endingPopupShown: false,
            gameStarted: false,
            score: 0
        }

        this.closeStartingPopup = this.closeStartingPopup.bind(this);
        this.getScoreFromPillsGame = this.getScoreFromPillsGame.bind(this);
    }

    render() {
        return React.createElement(GameManagerTemplate, {
            closeStartingPopup: this.closeStartingPopup,
            startingPopupShown: this.state.startingPopupShown,
            gameStarted: this.state.gameStarted,
            getScoreFromPillsGame: this.getScoreFromPillsGame,
            endingPopupShown: this.state.endingPopupShown,
            score: this.state.score
        })
    }

    closeStartingPopup() {
        this.setState({
            startingPopupShown: false,
            gameStarted: true
        })
    }

    getScoreFromPillsGame(score) {
        this.setState({
            score,
            endingPopupShown: true
        })
    }

}