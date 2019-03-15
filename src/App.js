import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { PillsGameManager } from './PillsGame/GameManager';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'


const temp = (state = 40, action) => {
  switch (action.type) {
    case 'UPDATE_TEMP': return state - action.value/4
    default:
      return state
  }
}

const score = (state = {temp: 40, score: 0, iteration: 1}, action) => {
  switch (action.type) {
    case 'CORRECT_PILL_CLICKED':
    return {temp: state.temp - 1/4, iteration: (state.iteration + 1) % 9, score: state.score + 1}
    default:
      return state
  }
}

const gameStarted = (state = false, action) => {
  switch (action.type) {
    case 'START': return action.started
    case 'END': return action.started
    default:
      return state
  }
}

const startingPopup = (state = true, action) => {
  switch (action.type) {
    case 'STARTING_POPUP_SHOWN': return true
    case 'STARTING_POPUP_NOT_SHOWN': return false
    default:
      return state
  }
}

const endingPopup = (state = true, action) => {
  switch (action.type) {
    case 'ENDING_POPUP_SHOWN': return true
    case 'ENDING_POPUP_NOT_SHOWN': return false
    default:
      return state
  }
}

const timeLeft = (state = {timeLeft: 10}, action) => {
  switch (action.type) {
    case 'START_TIMER':
      const interval = setInterval(action.decreaseTimer, 1000);
      console.log(action.decreaseTimer);
      return {interval, timeLeft: 10}
    case 'DECREASE_TIMER': 
      if (state.timeLeft === 1) {
        clearInterval(state.interval)
      }
    return Object.assign({}, state, {timeLeft: state.timeLeft - 1})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  temp,
  gameStarted,
  startingPopup,
  endingPopup,
  timeLeft,
  score
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <PillsGameManager />
        </Root>
      </Provider>
    );
  }
}

export default App;

const Root = styled.div`
`;
