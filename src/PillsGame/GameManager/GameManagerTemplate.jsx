import * as React from 'react';
import styled from 'styled-components';

import { StartingPopup } from '../StartingPopup';
import { PillsGameLogic } from '../PillsGameLogic/index';

export class GameManagerTemplate extends React.Component  {
  render(props){
    return (<Root>
        <StartingPopup />
        <PillsGameLogic/>
    </Root>);

  }
}

const Root = styled.section`
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`;
