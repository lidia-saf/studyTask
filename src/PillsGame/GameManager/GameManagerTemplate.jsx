import * as React from 'react';
import styled from 'styled-components';

import { StartingPopup } from '../StartingPopup';
import { PillsGameLogic } from '../PillsGameLogic/index';
import { EndingPopup } from '../EndingPopup';

export const GameManagerTemplate = ({
    closeStartingPopup,
    startingPopupShown,
    gameStarted,
    getScoreFromPillsGame,
    endingPopupShown,
    score
}) => (
    <Root>
        <StartingPopup 
            closeStartingPopup={closeStartingPopup}
            startingPopupShown={startingPopupShown} 
        />
        <EndingPopup 
            score={score}
            endingPopupShown={endingPopupShown}
        />
        <PillsGameLogic
            gameStarted={gameStarted}
            getScoreFromPillsGame={getScoreFromPillsGame}
        />
    </Root>

);

const Root = styled.section`
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`;