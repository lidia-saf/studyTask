import * as React from 'react';
import { Pill } from './Pill';
import styled from 'styled-components';

const PillsGameTemplate = ({transition, onPillClick, counter, pillsArray}) => (
    <GameContainer>
        {pillsArray.map(pill => {
            return (
                <Pill
                    transition={pill.transition} 
                    type={pill.type}
                    positionX={pill.positionX}
                    id={pill.id}
                    onPillClick={onPillClick}
                />
            )
        })}
        <Counter>{counter}</Counter>
    </GameContainer>
);

export { PillsGameTemplate };

const GameContainer = styled.section`
    width: 100%;
    height: 90vh;
    position: relative;
`;

const Counter = styled.div`
    position: absolute;
    bottom: 0;
    margin: 0 auto;
`;
