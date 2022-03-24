import React, {useState} from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Navigation(props) {
    let navigate = useNavigate();
    const [display, setDisplay] = useState('');

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
            <Logo>WebName</Logo>
            <BtnContainer>
                <Btn onClick={handleClick} value={'Home'}>Home</Btn>
                <Btn onClick={handleClick} value={'Diary'}>Diary</Btn>
                <Btn onMouseOver={() => setDisplay(0)} onMouseOut={() => setDisplay('')}>
                    <Btn>Recommandation</Btn>
                    <DropDownContainer display={display === 0}>
                        <Btn onClick={handleClick} value={'Music'}>Music & Behavior</Btn>
                        <Btn onClick={handleClick} value={'Restaurant'}>Restaurant</Btn>
                    </DropDownContainer>
                </Btn>
                <Btn onClick={handleClick} value={'Community'}>Community</Btn>
            </BtnContainer>
            <BtnContainer>
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

const DropDownContainer = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
`;