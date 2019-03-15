import * as React from 'react';
import styled from 'styled-components';
import { PillBehaviour } from '../../Pill/PillBehaviour';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { falsePills, truePills } from '../../Pill/Pills';

class __PillContainerContainer extends React.Component {
    shouldComponentUpdate() {
        return this.props.score !== 0 && this.props.iteration === 0;
    }

    render() {
        const array = []
        const totalNumberOfTruePills = 9;
        const totalNumberOfFalsePills = 10;
        for(let i =0; i< totalNumberOfTruePills;++i) {
            let random = Math.floor(Math.random()*truePills.length)
            array.push({index: random, type: 'truePills'});
        }
        for(let i =0; i< totalNumberOfFalsePills;++i) {
            let random = Math.floor(Math.random()*falsePills.length)
            array.push({index: random, type: 'falsePills'});
        }
        for(let i =0; i< array.length;++i) {
            let random = Math.floor(Math.random()*array.length)
            let temp = array[random]
            array[random] = array[i]
            array[i] = temp
          }
        return (
        <PillsContainer>
            {array.map((pill) => {
                return (
                    <PillBehaviour
                        index={pill.index}
                        pillType={pill.type}
                        key= {uuid.v4()}
                    />
                )
            }
            )}
        </PillsContainer>
        )
    }
    
}
  

const mapStateToProps = state => ({
    iteration: state.score.iteration,
    score: state.score.score
})

export const PillContainerContainer = connect(
  mapStateToProps
)(__PillContainerContainer)


const PillsContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 41px 0 36px;
`;