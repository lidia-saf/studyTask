import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const TimerWrapper = ({ timeLeft }) => (
    <Timer>
        {timeLeft}
    </Timer>
);

class __TimerBehaviour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 0
        }
    }
    // componentDidUpdate(prevProps, _) {
    //     if (prevProps.isStartingPopupShown !== this.props.isStartingPopupShown) {
    //         let interval = setInterval(this.props.decreaseTimeLeft, 1000);
    //         this.setState({interval})
    //     }

    //     if (prevProps.timeLeft === 0 || this.props.timeLeft === 0) {
    //         clearInterval(this.state.interval)
    //     }

    // }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return React.createElement(TimerWrapper, {
            timeLeft: this.props.timeLeft
        });
    }
}


const mapStateToProps = state => ({
    timeLeft: "0:"+(state.timeLeft.timeLeft < 10 ? "0" + state.timeLeft.timeLeft :state.timeLeft.timeLeft),
    isStartingPopupShown: state.startingPopup
});

const mapDispatchToProps = dispatch => ({
    decreaseTimeLeft: () => dispatch({type:'DECREASE_TIME'}),
})

export const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(__TimerBehaviour)

const Timer = styled.div`
display: inline-block;
font-size: 24px;
font-weight: 300;
color: #4f4f4f;
`;