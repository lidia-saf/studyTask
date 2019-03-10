import * as React from 'react';
import styled from 'styled-components';
import { Pill } from './Pill';

export const PillsGameTemplate = ({
    pillsArray,
    counter,
    onPillClick,
    timeLeft
}) => (
    <Root>
        <SickPerson>Больной бухгалтер🤒</SickPerson>
        <Game>
            {pillsArray.map((pill,i) => {
                return (
                    <Pill
                        key={pill.positionX + i}
                        transition={pill.transition}
                        type={pill.type}
                        positionX={pill.positionX}
                        id={pill.id}
                        x1={pill.x1}
                        x2={pill.x2}
                        y1={pill.y1}
                        y2={pill.y2}
                        index={i}
                        onPillClick={onPillClick}
                    />
                )
            }
            )}
        </Game>
        <Controls>
            <Timer>⏱️ 0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</Timer>
            <Counter>💊 {counter}</Counter>
        </Controls>

    </Root>
);

const Root = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background: linear-gradient(#004d99, #003366);
    font-style: sans-serif;
`;

const Counter = styled.div`
    display: inline-block;
`;

const Game = styled.div`
    overflow: hidden;
    height: 80%;
    width: 90%;
    background-color: #F5F5DC;
    margin: 0 auto;
    border-radius: 10px;
    border: 5px solid #000d1a;
`;

const SickPerson = styled.div`
    height: 50px;
    width: 100%;;
    color: #F5F5DC;
    font-size: 24px;
    text-align: center;
    padding-top: 20px;
`;

const Controls = styled.div`
    font-size: 24px;
    color: #ffffff;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const Timer = styled.div`
    margin-right: 100px;
    display: inline-block;
`;