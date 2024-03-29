import * as React from 'react';
import styled from 'styled-components';
import { PillBehaviour } from '../Pill/PillBehaviour';
import PromoBackground from '../Pill/images/promoBackground.svg';
import PromoBG from '../Pill/images/promoBG.png';
import { connect } from 'react-redux'

import Antiustalin from '../Pill/images/antiustalin.svg';
import Okhlazeltser from '../Pill/images/okhlazeltser.svg';
import Tempoflu from '../Pill/images/tempoflu.svg';

import { TimerContainer } from './Timer/Timer';
import { PillContainerContainer } from './PillContainer/PillContainerContainer';

export const PillsGameTemplate = (props) => {
    console.log('render PillsGameTemplate');
    return (
        <Root>
            <Image src={PromoBG}/>
            <ControlContainer />
            <GameContainer />
        </Root>
    )
};

const ControlContainer = (props) => {
    console.log('Render controls');
    return (
        <Controls>
            <TimerContainer />
            <GameStep>
                <StepFirst>8</StepFirst>
                <Divider>/</Divider>
                <StepSecond>10</StepSecond>
            </GameStep>
        </Controls>
    )
}

const GameContainer = (props) => {
    console.log('Render Game container')

    return (<Game>
        <GameIndicators>
            <EligiblePills>
                <PicturePill1 src={Tempoflu} />
                <PicturePill2 src={Antiustalin} />
                <PicturePill3 src={Okhlazeltser} />
            </EligiblePills>
            <ProgressBar>
                <TemperatureContainer />
            </ProgressBar>
        </GameIndicators>
        <PillContainerContainer />
    </Game>
    )
}  


const Root = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    position: relative;
    max-width: 600px;
    margin: 0 auto;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    max-width: 600px;
    position: absolute;
    top: 0;
`;


const GameIndicators = styled.div`
    display: flex;
    justify-content: space-between;
`;

const EligiblePills = styled.div`
    width: 113px;
    height: 32px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    background-color: #57b650;
    opacity: 0.9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 12px;
    margin-right: 5px;
`;

const PicturePill1 = styled.img`
    width: 18px;
    height: 18px;
    background-size: contain;
    background: url("${props => props.background}") no-repeat;
`;

const PicturePill2 = styled.img`
    width: 19px;
    height: 23px;
    background-size: contain;
    background: url("${props => props.background}") no-repeat;
`;


const PicturePill3 = styled.img`
    width: 35px;
    height: 21px;
    background-size: contain;
    background: url("${props => props.background}") no-repeat;
`;


const ProgressBar  = styled.div`
    width: 148px;
    height: 24px;
    border-radius: 8px;
    border: solid 2px #aaebff;
    padding: 4px;
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
`;

const Game = styled.div`
    min-height: 340px;
    background-color: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 16px;
    position: relative;
    z-index: 1000;
    margin: 165px auto 0;
`;


const Controls = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1000;
    margin: 0 auto;
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


const GameStep = styled.span`

`;



const Temperature = styled.div`
    height: 24px;
    width: 146px;
    transition: width 0.25s ease;
    width: ${props => props.temperature}px;
    border-radius: 6px;
    margin-right: 0;
    text-align: right;
    line-height: 24px;
    background-color: #f7434c;
    position: relative;
`;

const TemperatureIndicator = styled.div`
    position: absolute;
    right: 5px;
    top: 0;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;

`;

const TemperaturePresentation = ({temperature}) => (
  <Temperature temperature={temperature * 3}>
      <TemperatureIndicator>
          {temperature}
      </TemperatureIndicator>
  </Temperature>
);

const mapStateToProps2 = state => ({
  temperature: state.score.temp
})

const TemperatureContainer = connect(mapStateToProps2)(TemperaturePresentation)
