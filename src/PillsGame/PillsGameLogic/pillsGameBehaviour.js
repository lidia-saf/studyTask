import * as React from 'react';
import { PillsGameTemplate } from './PillsGameTemplate';

import Antiustalin from './images/antiustalinBig.svg';
import ButtonPill from './images/buttonPill.svg';
import LyingPillBig from './images/lyingPillBig.svg';
import OkhazeltserBig from './images/okhazeltserBig.svg';
import SyringeBig from './images/syringeBig.svg';
import TempofluBig from './images/tempofluBig.svg';
import UstalinBig from './images/ustalinBig.svg';


const falsePills = [
    ButtonPill,
    LyingPillBig,
    SyringeBig,
    UstalinBig
]

const truePills = [
    Antiustalin,
    OkhazeltserBig,
    TempofluBig,
]

class PillsGameBehaviour extends React.Component {
    constructor(props) {
      super(props)
      this.state={
          requestId: 0,
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
                height: 44
            },
            {
                background: ButtonPill,
                value: 0,
                margin: '7px 25px 2px 30px',
                width: 61,
                height: 45
            },
            {
                background: LyingPillBig,
                value: 0,
                margin: '17px 3px 10px 5px',

                width: 34,
                height: 17
            },
        
            {
                background: OkhazeltserBig,
                value: 1,
                margin: '8px 20px 6px 10px',

                width: 47,
                height: 34
            },
        
            {
                background: SyringeBig,
                value: 0,
                margin: '10px 12px 6px 3px',

                width: 44,
                height: 70
            },
        
            {
                background: TempofluBig,
                value: 1,
                margin: '5px',
                width: 34,
                height: 34
            },
            {
                background: ButtonPill,
                value: 0,
                margin: '10px 8px 2px 5px',
                width: 61,
                height: 45
            },
        
            {
                background: UstalinBig,
                value: 0,
                margin: '4px 7px 3px 10px',
                width: 44,
                height: 44
            },
            {
                background: OkhazeltserBig,
                value: 1,
                margin: '7px 3px 10px 10px',

                width: 47,
                height: 34
            },
            {
                background: LyingPillBig,
                value: 0,
                margin: '6px 10px 8px 2px',
                width: 34,
                height: 17
            },
        ]
      }
      this.frame = this.frame.bind(this);
      this.onPillClick = this.onPillClick.bind(this);
      this.controlTimer = this.controlTimer.bind(this);

    }

    componentDidUpdate(prevProps, _) {
        if (this.props.gameStarted !== prevProps.gameStarted && this.props.gameStarted === true) {
            const {
                requestAnimationFrame,
                webkitRequestAnimationFrame,
                mozRequestAnimationFrame,
                msRequestAnimationFrame,
                oRequestAnimationFrame,
            } = window;
    
            const requestAF =
                requestAnimationFrame ||
                webkitRequestAnimationFrame ||
                mozRequestAnimationFrame ||
                msRequestAnimationFrame ||
                oRequestAnimationFrame;
            requestAF(this.frame);
            const timerInterval = setInterval(this.controlTimer, 1000);
            this.setState({requestId: requestAF,
                            timerInterval: timerInterval,
                            thenTime: Date.now()
                        });
            this.mounted = true;
        }
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.state.requestId);
        this.mounted = false;
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
            window.cancelAnimationFrame(this.state.requestId);
            this.props.getScoreFromPillsGame(this.state.counter);
        }
    }

    frame() {

        if (this.state.timeLeft > 0) {

            const fpsInterval = 2000;
            requestAnimationFrame(this.frame);
            let now = Date.now();
            let elapsed = now - this.state.thenTime;
    
    
            if (elapsed > fpsInterval && this.state.stageValue === 0) {
    
                this.setState(prevState => {
                    return {
                        ...prevState,
                        thenTime: now - (elapsed % fpsInterval)
                    }
                })
                this.shufflePills(this.state.pills);
            }
        }
    }


    shufflePills(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        // const newArray = array.map((element) => {
        //     const index = Math.floor(Math.random() * 3)
        //     if (element.value != 1) {
        //         element.background = index < falsePills.length ? falsePills[index] : falsePills[2];
        //         console.log(falsePills[index])
        //     } else {
        //         element.background = index < truePills.length ? truePills[index] : truePills[1];
        //     }
        //     return element;
        // })

        this.setState({
            pills: array,
            stageValue: 4
        })
    }

    onPillClick(value) {
        this.setState(prevState => {
            return {
                ...prevState,
                temperature: prevState.temperature - (value/2),
                stageValue: prevState.stageValue - value
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
