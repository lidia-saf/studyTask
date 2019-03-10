import * as React from 'react';
import styled from 'styled-components';

export const PopupTemplate = ({
    endingPopupShown,
    onClick,
    score
}) => (
    <Root isShown={endingPopupShown}>
        <Content>
            <Title>Это успех! Вы заработали {score} баллов и сэкономили на штрафах! 🤑
                <br />Бухгалтер подготовил отчетность за первый квартал! 💸💸💸
            </Title>
            <ButtonsWrapper>
                <PlayButton onClick={onClick}>Далее</PlayButton>
            </ButtonsWrapper>
        </Content>
    </Root>
);

const Root = styled.div`
    display: ${props => props.isShown ? `block` : `none`};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    font-style: sans-serif;
`;

const Content = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 80%;
`;

const Title = styled.h1`
    font-size: 24px;
    color: dark-blue;
    text-align: center;
    line-height: 30px;
`;

const PlayButton = styled.button`
    height: 50px;
    width: 200px;
    cursor: pointer;
    background-color: #004d99;
    color: white;
    font-size: 18px;
    border-radius: 7px;
    border: none;
    outline: none;
    margin: 20px;
    &:hover {
        box-shadow: 0px 15px 20px #7e7e7e;
    }
    text-align: center;
`;

const BackButton = styled.button`
    height: 50px;
    width: 200px;
    cursor: pointer;
    background-color: #004d99;
    color: white;
    font-size: 18px;
    border-radius: 7px;
    border: none;
    outline: none;
    &:hover {
        box-shadow: 0px 15px 20px #7e7e7e;
    }
    margin: 20px;
    text-align: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap;
`;