import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const PillTemplate = ({ canvasRef, onPillClick, transition, type, x1, x2, y1, y2 }) => {
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
            onClick={onPillClick}
            transition={3}
            type={type}
            movePill={movePill}
            value={type}
        />
    </>
}

const Canvas = styled.div`
    animation: ${props => props.movePill} ${props => props.transition}s linear infinite;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.type === 'killPill' ? `red` : `green`};
`;
