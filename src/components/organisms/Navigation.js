import React from 'react';
import styled from "styled-components";

function Navigation(props) {
    return (
        <Container>
            <Logo>WebName</Logo>
            <BtnContainer>
                <Btn>Home</Btn>
                <Btn>Diary</Btn>
                <Btn>Community</Btn>
            </BtnContainer>
            <BtnContainer>
                <Btn>Login</Btn>
                <Btn>My Page</Btn>
            </BtnContainer>
        </Container>
    );
}

export default Navigation;

const Container = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  grid-template-columns: 0.8fr 1fr 0.1fr;
  align-items: center;
  background-color: #000000;
  opacity: 0.8;
  width: 100%;
  height: 120px;
  z-index: 2;
  &>img { //fis logo
    height: 50px;
    margin-left: 50px;
  }
  & .icon {
    color: #fff;
    font-size: 42px;
    margin-left: 50px;
  }
  & .icon:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  & .manage {
    width: 100%;
  }
  & > button {
    box-sizing: border-box;
    margin: 0 10px;
  }
`;

const Btn = styled.button`
  width: 200px;
  height: 70px;
  box-sizing: border-box;
  background-color: #000000;
  border: none;
  cursor: pointer;
  font-size: 23px;
  color: #fff;
  &:hover {
    transform: scale(1.05);
  }
`;

const Logo = styled.h1`
  background-color: #000000;
  color: #fff;
  margin-left: 130px;
`;