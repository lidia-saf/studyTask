import * as React from 'react';
import { PopupTemplate } from './PopupTemplate';

export class PopupBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return React.createElement(PopupTemplate, {
            endingPopupShown: this.props.endingPopupShown,
            score: this.props.score,
            onClick: this.onClick
        })
    }

    onClick() {

    }

    onBackCLick() {
        
    }
};