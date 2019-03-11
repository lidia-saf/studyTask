import * as React from 'react';
import styled from 'styled-components';

export const PopupTemplate = ({
    endingPopupShown,
    onClick,
    score
}) => (
    <Root isShown={endingPopupShown}>
        <Content>
            <Title> Вы сбили температуру до {score} С!
            </Title>
                <PlayButton onClick={onClick}>Далее</PlayButton>
        </Content>
    </Root>
);

const Root = styled.div`
    display: ${props => props.isShown ? `block` : `none`};
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600');
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    max-width: 600px;
    width: 100%;
    height: 100%;
    overflow: auto;
    opacity: 0.9;
    background-color: #4f4f4f;
    margin: 0 auto;
`;

const Content = styled.div`
    background-color: #ffffff;
    max-width: 279px;
    max-height: 280px;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
    margin: calc((100% - 280px)/2) auto;
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
    margin-top: 24px;
`;