import * as React from 'react';
import { PillTemplate } from './PillTemplate';
import { keyframes } from 'styled-components';


export class PillBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.paint = this.paint.bind(this);
        this.id = this.props.id;
    }
    
    shouldComponentUpdate(prevProps, _) {
        if (prevProps.id === this.id) {
            return false;
        } else {
            return true;
        }
    }

    paint() {

    }

    render() {
       const movePill = keyframes`
        0% {
            transform: translate(${this.props.positionX}, 0)}
        100% {
            transform: translate(${this.props.positionX}, 100vh)
        }
`;

        return React.createElement(PillTemplate, {
            canvasRef: this.canvas,
            onPillClick: this.props.onPillClick,
            transition: this.props.transition,
            type: this.props.type,
            positionX: this.props.positionX,
            movePill
        })
    }

}