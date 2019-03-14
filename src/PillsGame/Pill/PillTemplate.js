import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import { falsePills, truePills } from './Pills';


export class __PillTemplate  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosen: false
    }
  }

  componentDidUpdate() {
      if (this.props.reload) {
          this.setState({
              chosen: false
          })
      }
  }

  generateClickFunction(value) {
    return (event) => {
      if (value === 1) {
        this.setState({
          chosen: true
        })
        this.props.correctPilClicked();
      }
    }
  }

  render(props) {
        const pill = this.props.type === "truePills" ? truePills[this.props.index] : falsePills[this.props.index];
        return <>
            <img
                src={pill.background}
                onClick={this.generateClickFunction(pill.value).bind(this)}
                onTouchStart={this.generateClickFunction(pill.value).bind(this)}
                style={{width: pill.width+"px", height:pill.height+"px", visibility: this.state.chosen ? 'hidden': 'visible', flexBasis:"20%" }}
            />
        </>
      }
}



const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  correctPilClicked: () => dispatch({type:'CORRECT_PILL_CLICKED'}),
})

export const PillTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(__PillTemplate)
