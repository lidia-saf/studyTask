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
    chosen,
    index
    }) => {

        return <>
            <Canvas
                ref={canvasRef}
                onTouchStart={(e) => onClick(e)}
                onClick={(e) => onClick(e)}
                background={background}
                id={value}
                data-value={index}
                margin={margin}
                height={height}
                width={width}
                chosen={chosen}
            />
        </>
}

const movePill = keyframes`
        0% {
            opacity: 1
        }
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
    visibility: visible;
    ${props => props.chosen && `
    visibility: hidden;`}
    flex-basis: 20%;
`;
// animation: ${movePillmovePill} ${props => props.transition}s linear infinite;

// opacity: 1;
//     ${props => props.chosen && `
//     transition: opacity 0.5s;
//     opacity: 0;`};