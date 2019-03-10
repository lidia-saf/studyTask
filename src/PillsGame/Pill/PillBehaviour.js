import * as React from 'react';
import { PillTemplate } from './Pill';

// Responsible for moving from x1, y1 to x2, y2.
export class PillBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    render() {
        return React.createElement(PillTemplate, {
            canvasRef: this.canvas,
            type: this.props.type,
            x1: this.props.x1,
            x2: this.props.x2,
            y1: this.props.y1,
            y2: this.props.y2,
            onPillClick: this.props.onPillClick
        })
    }

}
