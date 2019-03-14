import * as React from 'react';
import { PopupTemplate } from './PopupTemplate';
import { connect } from 'react-redux';


export class __PopupBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.onPlayClick = this.onPlayClick.bind(this);
    }

    render() {
        console.log(this.props);
        return React.createElement(PopupTemplate, {
            startingPopupShown: this.props.startingPopupShown,
            onPlayClick: this.onPlayClick
        })
    }

    onPlayClick() {
        this.props.closeStartingPopup();
        this.props.startTimer(this.props.decreaseTimer);
    }

    onBackCLick() {
        
    }
};


const mapStateToProps = state => ({
    startingPopupShown: state.startingPopup
})

const mapDispatchToProps = dispatch => ({
  closeStartingPopup: () => dispatch({type:'STARTING_POPUP_NOT_SHOWN'}),
  startTimer: (decreaseTimer) => dispatch({type: 'START_TIMER', decreaseTimer}),
  decreaseTimer: () => dispatch({type: 'DECREASE_TIMER'})
})

export const PopupBehaviour = connect(
  mapStateToProps,
  mapDispatchToProps
)(__PopupBehaviour)
