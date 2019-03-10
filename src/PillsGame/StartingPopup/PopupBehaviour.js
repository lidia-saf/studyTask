import * as React from 'react';
import { PopupTemplate } from './PopupTemplate';
import { timingSafeEqual } from 'crypto';

export class PopupBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.onPlayClick = this.onPlayClick.bind(this);
    }

    render() {
        return React.createElement(PopupTemplate, {
            startingPopupShown: this.props.startingPopupShown,
            onPlayClick: this.onPlayClick
        })
    }

    onPlayClick() {
        this.props.closeStartingPopup();
    }

    onBackCLick() {
        
    }
};