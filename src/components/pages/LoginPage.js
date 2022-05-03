import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import LoginImg from "../../media/LoginPageImg.png"
import DisplayWeatherTime from "../molcules/DisplayWeatherTime";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: true,
};

function LoginPage(props) {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const [signUpRequest, setSignUpRequest] = useState({});

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    }

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

    const handleRequest = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'name':
                setSignUpRequest({...signUpRequest, name: value});
                break;
            case 'id':
                setSignUpRequest({...signUpRequest, id: value});
                break;
            case 'password':
                setSignUpRequest({...signUpRequest, password: value});
                break;
            case 'password2':
                setSignUpRequest({...signUpRequest, password2: value});
                break;
        }
    }

    const requestSignUp = () => {
        axios.post("http://3.35.70.211/signup", signUpRequest)
            .then((res) => {
                console.log(signUpRequest);
                console.log(res.data);
                alert('로그인 성공');
            })
            .catch((err) => {
                console.log(err);
                alert('로그인 실패');
            })
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        if (signUpRequest.password !== signUpRequest.password2) {
            alert('비밀번호가 일치하지 않습니다.')
            return;
        }
        requestSignUp();
    };

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
                        <LoginButton onClick={handleOpen}>회원가입</LoginButton>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <form onSubmit={handleSignUp}>
                                    <div style={{marginBottom: '5%'}}>
                                        <p>닉네임</p>
                                        <Input
                                            onChange={handleRequest}
                                            name='name'
                                            value={signUpRequest.name || ''}
                                            placeholder='닉네임을 입력해주세요.'
                                        />
                                        <p>아이디</p>
                                        <Input
                                            onChange={handleRequest}
                                            name='id'
                                            value={signUpRequest.id || ''}
                                            placeholder='아이디(이메일)를 입력해주세요.'
                                        />
                                        <p>비밀번호</p>
                                        <Input
                                            onChange={handleRequest}
                                            name='password'
                                            value={signUpRequest.password || ''}
                                            placeholder='비밀번호를 입력해주세요.'
                                            type='password'
                                        />
                                        <p>비밀번호 확인</p>
                                        <Input
                                            onChange={handleRequest}
                                            name='password2'
                                            value={signUpRequest.password2 || ''}
                                            placeholder='비밀번호 확인'
                                            type='password'
                                        />
                                    </div>
                                    <LoginButton type={'submit'}
                                                 disabled={!signUpRequest.name || !signUpRequest.id ||
                                                     !signUpRequest.password || !signUpRequest.password2}>회원가입</LoginButton>
                                    <LoginButton onClick={handleClose}>취소</LoginButton>
                                </form>
                            </Box>
                        </Modal>
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