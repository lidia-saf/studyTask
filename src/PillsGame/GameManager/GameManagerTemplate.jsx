import * as React from 'react';
import styled from 'styled-components';
import { StartingPopup } from '../StartingPopup';
import { PillsGame } from '..';
import { EndingPopup } from '../EndingPopup';

export const GameManagerTemplate = ({
    closeStartingPopup,
    startingPopupShown,
    gameStarted,
    getScoreFromPillsGame,
    endingPopupShown,
    score
}) => (
    <>
        <StartingPopup 
            closeStartingPopup={closeStartingPopup}
            startingPopupShown={startingPopupShown} 
        />
        <EndingPopup 
            score={score}
            endingPopupShown={endingPopupShown}
        />
        <PillsGame
            gameStarted={gameStarted}
            getScoreFromPillsGame={getScoreFromPillsGame}
        />
    </>

);