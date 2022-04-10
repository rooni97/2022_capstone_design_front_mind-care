import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import LoginImg from "../../media/LoginPageImg.png"
import DisplayWeatherTime from "../molcules/DisplayWeatherTime";

function LoginPage(props) {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const handleUserId = (e) => {
        setUserId(e.target.value);
    }

    const handleUserPwd = (e) => {
        setUserPwd(e.target.value);
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        console.log(userId, userPwd, 'Login Success');
    }

    return (
        <div>
            <Navigation />
            <PageContainer>
                <Wrapping>
                    <Cont>
                        <Logo src={LoginImg} />
                    </Cont>
                    <Cont>
                        <LoginForm onSubmit={handleLoginClick}>
                            <h3>환영합니다.</h3>
                            <h2>로그인 후 이용하실 수 있습니다.</h2>
                            
                            <p>Email</p>
                            <Input
                                onChange={handleUserId}
                                name='id'
                                value={userId}
                                placeholder='아이디(이메일)'
                            /> 
                            <p>Password</p>
                            <Input
                                onChange={handleUserPwd}
                                name='password'
                                value={userPwd}
                                type='password'
                                placeholder='비밀번호'
                            />
                            <LoginButton type={'submit'} disabled={!userId || !userPwd}>로그인</LoginButton>
                            
                            <DisplayWeatherTime />
                        </LoginForm>
                    </Cont>
                </Wrapping>
            </PageContainer>
        </div>
    );
}

export default LoginPage;

const PageContainer = styled.div`
  width: 100%;
  height: 60vh;
  padding-top: 120px;
  background-color: white;
  margin-top:100px;
`

const Wrapping = styled.div`
    display: flex;
    height: 100%;
    width:85vw;
    margin:auto;
    flex-direction : row;
    align-items: center;
    justify-content: space-between;
`

const Cont = styled.div`
    width:40%
`

const LoginForm = styled.form`
    width: 70%;
`

const Logo = styled.img`
    max-width: 100%;
    object-position: left;
    object-fit: contain;
    overflow: auto;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const LoginButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #1e1f21;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;