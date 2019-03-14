import * as React from 'react';
import { GameManagerTemplate } from './GameManagerTemplate';
import { connect } from 'react-redux'

class __GameManagerBehaviour extends React.Component {
    render() {
        return (<GameManagerTemplate/>);
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  closeStartingPopup: () => dispatch({type:'STARTING_POPUP_NOT_SHOWN'}),
  showEndingPopup: () => dispatch({type: 'ENDING_POPUP_SHOWN'})
})

export const GameManagerBehaviour = connect(
  mapStateToProps,
  mapDispatchToProps
)(__GameManagerBehaviour)
