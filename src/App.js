import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { PillsGameManager } from './PillsGame/GameManager';

class App extends Component {
  render() {
    return (
      <Root>
        <PillsGameManager />
      </Root>
    );
  }
}

export default App;

const Root = styled.div`
`;