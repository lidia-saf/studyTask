import * as React from 'react';
import { PillsGameTemplate } from './PillsGameTemplate';
import uuid from 'uuid';

class PillsGameBehaviour extends React.Component {
    constructor(props) {
      super(props)
      this.state={
          requestId: 0,
          transition: 0,
          counter: 0,
          pillsArray: [],
          timerInterval: 0,
          timeLeft: 30,
          results: []
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
            this.setState({pillsArray: []})
            this.props.getScoreFromPillsGame(this.state.counter);
        }
    }

    frame() {

        if (this.state.timeLeft > 0) {

            const fpsInterval = 2000;
            requestAnimationFrame(this.frame);
            let now = Date.now();
            let elapsed = now - this.state.thenTime;
    
    
            if (elapsed > fpsInterval) {
    
                this.setState(prevState => {
                    return {
                        ...prevState,
                        thenTime: now - (elapsed % fpsInterval)
                    }
                })
                this.createPills();
            }
        }
    }

    choosePill() {
        const HEAL_PILL_PROBABILITY = 0.7;
        return Math.random() > HEAL_PILL_PROBABILITY ? 'healPill' : 'killPill';
    }

    createPills() {
        const amount = 2;
        const pillsArray = this.state.pillsArray;

        for (let i = 0; i < amount; ++i) {
            let pill = {
                type: this.choosePill(),
                x1: Math.random() * 100,
                x2: Math.random() * 100,
                y1: 0,
                y2: 100,
                transition: this.chooseSpeed(),
                id: uuid.v4()
            }
            pillsArray.push(pill);
        }
        let pillsArrayWithOldOnesGone = []
        for (let j =0; j< pillsArray.length; ++j) {
          if (pillsArray[j].y1 === 100) {
            continue;
          }
          pillsArrayWithOldOnesGone.push(pillsArray[j])
        }
        this.setState({
            pillsArray: pillsArrayWithOldOnesGone
        })
    }

    chooseSpeed() {
        let speed = 4;
        if (this.state.counter > 2) {
            speed = 3;
        } else if (this.state.counter > 4) {
            speed = 2;
        } else if (this.state.counter > 5) {
            speed = 1;
        }

        this.setState({
            transition: speed
        })
        return speed;
    }

    onPillClick(value) {
        this.setState(prevState => {
            return {
                ...prevState,
                counter: prevState.counter + value,
            }
        })
    }

    render() {
      return React.createElement(PillsGameTemplate, {
        pillsArray: this.state.pillsArray,
        counter: this.state.counter,
        onPillClick: this.onPillClick,
        timeLeft: this.state.timeLeft
      })
    }
}

export { PillsGameBehaviour };
