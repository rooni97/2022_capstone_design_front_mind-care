import React, {useState} from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomButton from "../atoms/CustomButton";
import {Link} from "react-scroll";

function Navigation(props) {
    let navigate = useNavigate();
    const [display, setDisplay] = useState(1);

    const handleClick = (e) => {
        const route = e.target.value;
        switch (route) {
            case 'Home':
                navigate('/');
                break;
            case 'Diary':
                navigate('/diary');
                break;
            case 'Community':
                navigate('/community');
                break;
            case 'Login':
                navigate('/login');
                break;
            case 'My Page':
                navigate('/mypage');
                break;
            case 'Music':
                navigate('/music');
                break;
            case 'Restaurant':
                navigate('/restaurant');
                break;
        }
    }

    return (
        <Container>
            <Logo>MindCare</Logo>
            <BtnContainer to="0" spy={true} smooth={true}>
                <Btn onClick={handleClick} value={'Home'}>Home</Btn>
                <Btn onClick={handleClick} value={'Diary'}>Diary</Btn>
                <Recom onMouseOver={() => setDisplay(0)} onMouseOut={() => setDisplay('')}>
                    <Btn>Recommandation</Btn>
                    <DropDownContainer to="0" spy={true} smooth={true} display={display === 0 ? 'block' : 'none'}>
                        <Btn onClick={handleClick} value={'Music'}>Music & Behavior</Btn>
                        <Btn onClick={handleClick} value={'Restaurant'}>Restaurant</Btn>
                    </DropDownContainer>
                </Recom>
                <Btn onClick={handleClick} value={'Community'}>Community</Btn>
            </BtnContainer>
            <BtnContainer to="0" spy={true} smooth={true}>
                <Btn onClick={handleClick} value={'Login'}>Login</Btn>
                <Btn onClick={handleClick} value={'My Page'}>My Page</Btn>
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
  grid-template-columns: 0.5fr 2fr 0.5fr;
  align-items: center;
  background-color: #000000;
  opacity: 0.8;
  width: 100%;
  height: 100px;
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

const BtnContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-self: center;
  & > button {
    box-sizing: border-box;
    margin: 0 10px;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: #000000;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #fff;
  &:hover {
    transform: scale(1.05);
  }
`;

const Logo = styled.h1`
  background-color: #000000;
  color: #fff;
  margin-left: 5rem;
`;

const DropDownContainer = styled(Link)`
  display: ${props => props.display};
`;

const Recom = styled.div`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: #000000;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #fff;
`;