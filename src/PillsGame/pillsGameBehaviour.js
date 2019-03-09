import * as React from 'react';
import { PillsGameTemplate } from './pillsGameTemplate';

class PillsGameBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            requestId: 0,
            transition: 0,
            counter: 0,
            choice: 'killPill',
            pillsArray: [],
        }
        this.canvasRef = React.createRef();
        this.frame = this.frame.bind(this);
        this.onPillClick = this.onPillClick.bind(this);
    }

    render() {
        return React.createElement(PillsGameTemplate, {
            translateY: this.state.translateY,
            onPillClick: this.onPillClick,
            counter: this.state.counter,
            pillsArray: this.state.pillsArray
        });
    }

    componentDidMount() {
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
        this.setState({requestId: requestAF,
                        thenTime: Date.now()
                    });
        this.mounted = true;
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.state.requestId);
        this.mounted = false;
    }

    frame() {
        const fpsInterval = 200;
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

    choosePill() {
        const HEAL_PILL_PROBABILITY = 0.7;
        return Math.random() > HEAL_PILL_PROBABILITY ? 'healPill' : 'killPill';
    }

    chooseSpeed(score) {
        let speed = 4;

        if (score > 3) {
            speed = 2;
        } else if (score > 5) {
            speed = 1;
        }

        return speed;
    }

    createPills() {
        // const amount = Math.random() * 5;
        const amount = 1;
        const pillsArray = this.state.pillsArray;
        for (let i = 0; i < amount; ++i) {
            let pill = {
                type: this.choosePill(),
                positionX: Math.random() * 10 + 100,
                transition: this.chooseSpeed(this.state.counter),
                id: Math.random() * 100000
            }
            pillsArray.push(pill);
        }
        this.setState({
            pillsArray
        })
    }

    onPillClick(e) {
        this.setState(prevState => {
            return {
                ...prevState,
                counter: prevState.counter + 1
            }
        })
        console.log(e.target.getBoundingClientRect());
    }

}

export { PillsGameBehaviour };

