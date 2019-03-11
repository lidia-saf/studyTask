import * as React from 'react';
import styled from 'styled-components';
import { PillBehaviour } from '../Pill/PillBehaviour';
import PromoBackground from './images/promoBackground.svg';

import Antiustalin from './images/antiustalin.svg';
import Okhlazeltser from './images/okhlazeltser.svg';
import Tempoflu from './images/tempoflu.svg';

export const PillsGameTemplate = ({
    pillsArray,
    counter,
    onPillClick,
    timeLeft
}) => (
    <Root>
        <Controls>
            <Timer>0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</Timer>
            <GameStep>
                <StepFirst>8</StepFirst>
                <Divider>/</Divider>
                <StepSecond>10</StepSecond>
            </GameStep>
        </Controls>
        <Game>
            <GameIndicators>
                <EligiblePills>
                    <PicturePill1 width={16} height={16} background={Tempoflu} />
                    <PicturePill2 width={22} height={12}  background={Antiustalin} />
                    <PicturePill3 width={33} height={20} background={Okhlazeltser} />
                </EligiblePills>
                <ProgressBar>

                </ProgressBar>
            </GameIndicators>
            {pillsArray.map((pill,i) => {
                return (
                    <PillBehaviour
                        key={pill.id}
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


    </Root>
);

const Root = styled.section`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    position: relative;
    background: url("${PromoBackground}") no-repeat;
    background-size: 100% auto;
    background-color: #ffffff;
    max-width: 600px;
    padding: 24px 16px;
`;

const GameIndicators = styled.div`
    display: flex;
    justify-content: space-between;
`;

const EligiblePills = styled.div`
    width: 89px;
    height: 26px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    background-color: rgba(196, 196, 196, 0.53);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 12px;
    margin-right: 5px;
`;

const PicturePill1 = styled.div`
    width: 18px;
    height: 18px;
    background-size: contain;
    background: url("${props => props.background}") no-repeat;
`;

const PicturePill2 = styled.div`
    width: 19px;
    height: 23px;
    background-size: contain;
    background: url("${props => props.background}") no-repeat;
`;


const PicturePill3 = styled.div`
    width: 35px;
    height: 21px;
    background-size: contain;
    background: url("${props => props.background}") no-repeat;
`;


const ProgressBar  = styled.div`
    width: 148px;
    height: 32px;
    opacity: 0.2;
    border-radius: 8px;
    border: solid 2px #4f4f4f;
`;

const Game = styled.div`
    height: 340px;
    background-color: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    margin-top: 165px;
    padding: 16px;
`;


const Controls = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Timer = styled.div`
    display: inline-block;
    font-size: 24px;
    font-weight: 300;
    color: #4f4f4f;
`;

const GameStep = styled.span`
    
`;

const StepFirst = styled.span`
    font-size: 24px;
    font-weight: 500;
    text-align: right;
    color: #4f4f4f;
`;

const Divider = styled.span`
    font-size: 24px;
    text-align: right;
    color: #4f4f4f;
`;

const StepSecond = styled.span`
    font-size: 16px;
    font-weight: 300;
    text-align: right;
    color: #4f4f4f;
`;
