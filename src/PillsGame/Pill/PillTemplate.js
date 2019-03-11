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
    width
    }) => {

        const movePill = keyframes`
        0% {
            opacity: 1}
        100% {
            opacity: 0
        }
        `;
        return <>
            <Canvas
                ref={canvasRef}
                onTouchStart={(e) => onClick(e)}
                background={background}
                id={value}
                margin={margin}
                height={height}
                width={width}
            />
        </>
}

const Canvas = styled.div`
    margin: ${props => props.margin};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: url('${props => props.background}') no-repeat;
    background-size: contain;
`;
// animation: ${props => props.movePill} ${props => props.transition}s linear infinite;