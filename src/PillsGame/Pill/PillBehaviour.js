import * as React from 'react';
import { PillTemplate } from './PillTemplate';

// Responsible for moving from x1, y1 to x2, y2.
export class PillBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
        this.canvas = React.createRef();
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return React.createElement(PillTemplate, {
            canvasRef: this.canvas,
            value: this.props.value,
            margin: this.props.margin,
            height: this.props.height,
            width: this.props.width,
            background: this.props.background,
            onClick: this.onClick,
        })
    }

    onClick(event) {
        const value = event.currentTarget.id;
        console.log("I work")
      
        this.props.onPillClick(value);
       
    }

}
