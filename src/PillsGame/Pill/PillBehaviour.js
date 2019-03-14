import * as React from 'react';
import { PillTemplate } from './PillTemplate';

export class PillBehaviour extends React.Component {

    render(props) {
        return (<PillTemplate
            index = {this.props.index}
            type={this.props.pillType}
        />)
    }

}
