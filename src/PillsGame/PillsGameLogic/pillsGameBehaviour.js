import * as React from 'react';
import { PillsGameTemplate } from './PillsGameTemplate';
import uuid from 'uuid';

import Antiustalin from './images/antiustalinBig.svg';
import ButtonPill from './images/buttonPill.svg';
import LyingPillBig from './images/lyingPillBig.svg';
import OkhazeltserBig from './images/okhazeltserBig.svg';
import SyringeBig from './images/syringeBig.svg';
import TempofluBig from './images/tempofluBig.svg';
import UstalinBig from './images/ustalinBig.svg';


const falsePills = [
    {
        background: ButtonPill,
        width: 61,
        height: 45
    },
    {
        background: LyingPillBig,
        width: 34,
        height: 17
    },
        
    {
        background: SyringeBig,
        width: 44,
        height: 70
    },
        
    {
        background: UstalinBig,
        width: 44,
        height: 44
    },
]

const truePills = [
    
    {
        background: Antiustalin,
        width: 44,
        height: 44
    },
        
    {
        background: OkhazeltserBig,
        width: 47,
        height: 34
    },
    {
        background: TempofluBig,
        width: 34,
        height: 34
    },
]

class PillsGameBehaviour extends React.Component {
    constructor(props) {
      super(props)
      this.state={
          temperature: 40,
          timerInterval: 0,
          stageValue: 4,
          timeLeft: 10,
          pills: [
            {
                background: Antiustalin,
                value: 1,
                margin: '10px 40px 20px 5px',
                width: 44,
                height: 44,
                chosen: 1
            },
            {
                background: ButtonPill,
                value: 0,
                margin: '7px 25px 2px 30px',
                width: 61,
                height: 45,
                chosen: 2
            },
            {
                background: LyingPillBig,
                value: 0,
                margin: '17px 3px 10px 5px',

                width: 34,
                height: 17,
                chosen: 3
            },
        
            {
                background: OkhazeltserBig,
                value: 1,
                margin: '8px 20px 6px 10px',

                width: 47,
                height: 34,
                chosen: 4
            },
        
            {
                background: SyringeBig,
                value: 0,
                margin: '10px 12px 6px 3px',

                width: 44,
                height: 70,
                chosen: 5
            },
        
            {
                background: TempofluBig,
                value: 1,
                margin: '5px',
                width: 34,
                height: 34,
                chosen: 6
            },
            {
                background: ButtonPill,
                value: 0,
                margin: '10px 8px 2px 5px',
                width: 61,
                height: 45,
                chosen: 7
            },
        
            {
                background: UstalinBig,
                value: 0,
                margin: '4px 7px 3px 10px',
                width: 44,
                height: 44,
                chosen: 8
            },
            {
                background: OkhazeltserBig,
                value: 1,
                margin: '7px 3px 10px 10px',

                width: 47,
                height: 34,
                chosen: 9
            },
            {
                background: LyingPillBig,
                value: 0,
                margin: '6px 10px 8px 2px',
                width: 34,
                height: 17,
                chosen: 10
            },
        ]
      }
      this.onPillClick = this.onPillClick.bind(this);
      this.controlTimer = this.controlTimer.bind(this);

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.gameStarted !== prevProps.gameStarted && this.props.gameStarted === true) {
            const timerInterval = setInterval(this.controlTimer, 1000);
            this.setState({
                            timerInterval: timerInterval,
                            thenTime: Date.now()
                        });
        }
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timerInterval);
    }

    controlTimer() {
        if (this.state.timeLeft > 0) {
            this.setState(prevState => { 
                return {
                ...prevState,
                timeLeft: prevState.timeLeft - 1
                }
            })
      
        } else {
            clearInterval(this.state.timerInterval);
            this.props.getScoreFromPillsGame(this.state.temperature);
        }
    }


    shufflePills(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);

            if (randomIndex === currentIndex) {
                this.shufflePills(this.state.pills);
            }

            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        const newArray = array.map((element) => {
            let index = 0;
            
            if (element.value != 1) {
                index = Math.floor(Math.random() * falsePills.length);
                element.background = falsePills[index].background;
                element.width = falsePills[index].width;
                element.height = falsePills[index].height;
                element.chosen = uuid.v4();
            } else {
                index = Math.floor(Math.random() * truePills.length);
                element.background = truePills[index].background;
                element.width = truePills[index].width;
                element.height = truePills[index].height;
                element.chosen = uuid.v4();
            }
            return element;
        })

        this.setState({
            pills: newArray,
            stageValue: 4
        })
    }

    onPillClick(value, ref) {
        console.log(ref);
        this.setState(prevState => {
            return {
                ...prevState,
                temperature: prevState.temperature - (value/4),
                stageValue: prevState.stageValue - value,
            }
        }, () => {
            if (this.state.stageValue === 0) {
                this.shufflePills(this.state.pills);
            }
        })
    }

    render() {
      return React.createElement(PillsGameTemplate, {
        pillsArray: this.state.pills,
        temperature: this.state.temperature,
        onPillClick: this.onPillClick,
        timeLeft: this.state.timeLeft,
        temperature: this.state.temperature
      })
    }
}

export { PillsGameBehaviour };
