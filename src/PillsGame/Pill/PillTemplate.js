import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';


export const PillTemplate = ({ 
    canvasRef, 
    onClick, 
    value,
    background,
    margin,
    height,
    width,
    chosen
    }) => {

        return <>
            <Canvas
                ref={canvasRef}
                onTouchStart={(e) => onClick(e)}
                background={background}
                id={value}
                margin={margin}
                height={height}
                width={width}
                chosen={chosen}
            />
        </>
}

const movePill = keyframes`
        0% {
            opacity: 1}
        100% {
            opacity: 0
        }
        `;

const Canvas = styled.div`
    margin: ${props => props.margin};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: url('${props => props.background}') no-repeat;
    background-size: contain;
    opacity: 1;
    ${props => props.chosen ? `opacity: 0; transition: 0.5s;` : ``};
`;
// animation: ${movePillmovePill} ${props => props.transition}s linear infinite;