import * as React from 'react';
import styled from 'styled-components';
import { PillBehaviour } from '../Pill/PillBehaviour';
import PromoBackground from '../Pill/images/promoBackground.svg';
import { connect } from 'react-redux'

import Antiustalin from '../Pill/images/antiustalin.svg';
import Okhlazeltser from '../Pill/images/okhlazeltser.svg';
import Tempoflu from '../Pill/images/tempoflu.svg';

import { TimerContainer } from './Timer/Timer';
import { PillContainerContainer } from './PillContainer/PillContainerContainer';

export const PillsGameTemplate = (props) => (
    <Root>
        <ControlContainer />
        <GameContainer />
    </Root>
          );

const ControlContainer = (props) => (
  <Controls>
      <TimerContainer />
      <GameStep>
          <StepFirst>8</StepFirst>
          <Divider>/</Divider>
          <StepSecond>10</StepSecond>
      </GameStep>
  </Controls>
)

const GameContainer = (props) => (
  <Game>
      <GameIndicators>
          <EligiblePills>
              <PicturePill1 width={16} height={16} background={Tempoflu} />
              <PicturePill2 width={22} height={12}  background={Antiustalin} />
              <PicturePill3 width={33} height={20} background={Okhlazeltser} />
          </EligiblePills>
          <ProgressBar>
              <TemperatureContainer />
          </ProgressBar>
      </GameIndicators>
      <PillContainerContainer />
  </Game>
)



const Root = styled.section`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    position: relative;
    background: url("${PromoBackground}") no-repeat;
    background-size: 100% auto;
    background-color: #ffffff;
    max-width: 600px;
    padding: 24px 16px;
    margin: 0 auto;
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
    height: 24px;
    opacity: 0.2;
    border-radius: 8px;
    border: solid 2px #4f4f4f;
    padding: 4px;
    display: flex;
    justify-content: flex-end;
`;

const Game = styled.div`
    min-height: 340px;
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
    background-image: linear-gradient(to left, #dedede, #a7a7a7 50%, #474747);
    position: relative;
`;

const TemperatureIndicator = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    font-weight: 500;
    color: #4f4f4f;

`;

const TemperaturePresentation = ({temperature}) => (
  <Temperature temperature={temperature * 2}>
      <TemperatureIndicator>
          {temperature}
      </TemperatureIndicator>
  </Temperature>
);

const mapStateToProps2 = state => ({
  temperature: state.score.temp
})

const TemperatureContainer = connect(mapStateToProps2)(TemperaturePresentation)
