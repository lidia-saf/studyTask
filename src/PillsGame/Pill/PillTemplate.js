import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

import correctSound from './sounds/correct.mp3';
import incorrectSound from './sounds/incorrect.wav';

export const PillTemplate = ({ 
    canvasRef, 
    onClick, 
    transition, 
    type, 
    x1, 
    x2, 
    y1, 
    y2, 
    correctSoundRef, 
    incorrectSoundRef, 
    greenPillClicked }) => {

        const movePill = keyframes`
        0% {
            transform: translate(${x1}vw, ${y1}vh)}
        100% {
            transform: translate(${x2}vw, ${y2}vh)
        }
        `;
        return <>
            <Canvas
                ref={canvasRef}
                onClick={(e) => onClick(e)}
                transition={transition}
                type={type}
                movePill={movePill}
                id={type}
                greenPillClicked={greenPillClicked}
            />
            <audio src={correctSound} ref={correctSoundRef} />
            <audio src={incorrectSound} ref={incorrectSoundRef} />
        </>
}

const Canvas = styled.div`
    animation: ${props => props.movePill} ${props => props.transition}s linear infinite;
    width: 50px;
    height: 20px;
    border-radius: 16px;
    background-color: ${props => props.type === 'killPill' ? `red` : `green`};
`;
