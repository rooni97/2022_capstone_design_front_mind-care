import React, {useState} from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {Link} from "react-scroll";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FaHeartbeat } from "react-icons/fa";
import TemporaryDrawer from "../molcules/TemporaryDrawer";
import {useRecoilValue} from "recoil";
import {loginState} from "../../store/LoginInfo";




function Navigation(props) {
    let navigate = useNavigate();
    const isLoggedIn = useRecoilValue(loginState);
    const [display, setDisplay] = useState(1);

    const handleClick = (e) => {
        const route = e.target.id;
        console.log(e.target)
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
            case 'Logout':
                localStorage.clear();
                window.location.reload();
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
            <Logo><div><FaHeartbeat /></div> <div>MINDCARE</div></Logo>
            <Menu>
                <TemporaryDrawer />
            </Menu>
            <BtnContainer to="0" spy={true} smooth={true}>
                <Btn onClick={handleClick} id={'Home'}>Home</Btn>
                <Btn onClick={handleClick} id={'Diary'}>Diary</Btn>
                <Recom onMouseOver={() => setDisplay(0)} onMouseOut={() => setDisplay('')}>
                    <Btn>Recommandation</Btn>
                    <DropDownContainer to="0" spy={true} smooth={true} display={display === 0 ? 'flex' : 'none'}>
                        <Btn2 onClick={handleClick} id={'Music'}>Music & Behavior</Btn2>
                        <Btn2 onClick={handleClick} id={'Restaurant'}>Restaurant</Btn2>
                    </DropDownContainer>
                </Recom>
                <Btn onClick={handleClick} id={'Community'}>Community</Btn>
            </BtnContainer>
            <BtnContainer to="0" spy={true} smooth={true}>
                <Btn onClick={handleClick} id={'Login'}>
                    {isLoggedIn===true ?
                        <>
                            <BiLogOut id={'Logout'} className={'logout'}/>
                            <div id={'Logout'} >Logout</div>
                        </>
                        :
                        <>
                            <BiLogIn id={'Login'} className={'login'}/>
                            <div id={'Login'} >Login</div>
                        </>}
                </Btn>
                <Btn onClick={handleClick} id={'My Page'}>
                    <FiUser id={'My Page'} className={'my_page'} />
                    <div id={'My Page'} >My Page</div>
                </Btn>
            </BtnContainer>
        </Container>
    );
}

export default Navigation;

const Container = styled.nav`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  //opacity: 0.8;
  width: 100%;
  height: 100px;
  z-index: 2;
`;

const BtnContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .login {
    color: white;
    font-size: 2rem;
  }

  .logout {
    color: white;
    font-size: 2rem;
  }

  .my_page {
    color: white;
    font-size: 2rem;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Btn = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #000000;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }
`;

const Btn2 = styled.div`
  width: 160%;
  height: 100px;
  box-sizing: border-box;
  background-color: #000000;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  &:hover {
    transform: scale(1.05);
  }
`;


const Logo = styled.div`
  background-color: #000000;
  color: #fff;
  margin-left: 3rem;
  font-size: 1.6rem;
  display: flex;
  div {
    margin-right: 0.3rem;
  }
  @media screen and (max-width: 700px) {
    margin-left: 15%;
  }
`;

const DropDownContainer = styled.div`
  display: ${props => props.display};
  position: fixed;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
`;

const Recom = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #000000;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: right;
    width: 50vw;
  }
`;