import * as React from 'react';
import styled from 'styled-components';

import Antiustalin from './images/antiustalin.svg';
import Okhlazeltser from './images/okhlazeltser.svg';
import Tempoflu from './images/tempoflu.svg';

export const PopupTemplate = ({
    startingPopupShown,
    onPlayClick
}) => (
    <Root isShown={startingPopupShown}>
        <Content>
            <Title>Заболел бухгалтер, тебе надо его вылечить, чем больше ты успеешь поймать 
                таблеток тем скорее он выздоровеет
            </Title>
            <PillsWrapper>
                <Pill>
                    <PillIcon background={Tempoflu} />
                    <PillName>Темпо-<br />Флю</PillName>
                </Pill>
                <Pill>
                    <PillIcon background={Antiustalin}  />
                    <PillName>Анти-<br />усталин</PillName>
                </Pill>
                <Pill>
                    <PillIcon background={Okhlazeltser}  />
                    <PillName>Охла-<br />Зельцер</PillName>
                </Pill>
            </PillsWrapper>
            <PlayButton onClick={onPlayClick}>Взять аптечку</PlayButton>
        </Content>
    </Root>
);

const Root = styled.div`
    display: ${props => props.isShown ? `block` : `none`};
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600');
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(79, 79, 79, 0.9);
    margin: 0 auto;
`;

const Content = styled.div`
    background-color: #ffffff;
    max-width: 279px;
    max-height: 280px;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0);
    margin: 150px auto;
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 400;
    color: #4f4f4f;
    text-align: left;
    margin: 0;
`;

const PlayButton = styled.button`
    height: 54px;
    width: 278px;
    cursor: pointer;
    background-color: #4f4f4f;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    outline: none;
    margin: 0 auto;
    &:hover {
        box-shadow: 0px 15px 20px #7e7e7e;
    }
    text-align: center;
`;

const PillsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0 24px;
`;

const Pill = styled.div`
    &:first-of-type {
        margin-left: 3px;
    }

    &:last-of-type {
        margin-right: 3px;
    }
`;

const PillIcon = styled.div`
    width: 64px;
    height: 64px;
    background: url("${props => props.background}") no-repeat;
    margin: 0 0 8px;
`;

const PillName = styled.span`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #4f4f4f;
`;