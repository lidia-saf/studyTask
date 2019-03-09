import * as React from 'react';
import styled from 'styled-components';

export const PillTemplate = ({ canvasRef, onPillClick, transition, type, positionX, movePill }) => (
    <>
        <Canvas 
            ref={canvasRef} 
            onClick={onPillClick}
            transition={transition}
            type={type}
            positionX={positionX}
            movePill={movePill}
        />
    </>
);



const Canvas = styled.div`
    animation: ${props => props.movePill} ${props => props.transition}s linear infinite;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.type === 'killPill' ? `red` : `green`};
    transform: translateX(${props => props.positionX});
`;