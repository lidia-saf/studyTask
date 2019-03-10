import React, { Component } from 'react';
import './App.css';
import { PillsGame } from './PillsGame';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Root>
        <PillsGame />
      </Root>
    );
  }
}

export default App;

const Root = styled.div`
`;