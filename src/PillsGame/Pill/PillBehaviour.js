import * as React from 'react';
import { PillTemplate } from './PillTemplate';

// Responsible for moving from x1, y1 to x2, y2.
export class PillBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            greenPillClicked: false
        }
        this.canvas = React.createRef();
        this.correctSoundRef = React.createRef();
        this.incorrectSoundRef = React.createRef();
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return React.createElement(PillTemplate, {
            canvasRef: this.canvas,
            type: this.props.type,
            x1: this.props.x1,
            x2: this.props.x2,
            y1: this.props.y1,
            y2: this.props.y2,
            onClick: this.onClick,
            transition: this.props.transition,
            correctSoundRef: this.correctSoundRef,
            incorrectSoundRef: this.incorrectSoundRef, 
            greenPillClicked: this.state.greenPillClicked
        })
    }

    onClick(event) {
        const type = event.currentTarget.id;
        let value = 0;
        switch (type) {
            case 'killPill':
                value = 0;
                break;
            case 'healPill':
                value = 1;
                break;
            default:
            value = 0;
        }
        this.props.onPillClick(value);
        this.setState({
            greenPillClicked: true
        })

        if (type==="killPill") {
            this.incorrectSoundRef.current.play();
        } else {
            this.correctSoundRef.current.play();
        }
    }

}
