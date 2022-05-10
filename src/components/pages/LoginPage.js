import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import LoginImg from "../../media/LoginPageImg.png"
import DisplayWeatherTime from "../molcules/DisplayWeatherTime";
import axios from "axios";
import {
    Modal,
    Box,
    Typography,
    CssBaseline,
    TextField,
    Paper,
    Grid,
    Link,
    Avatar
} from "@mui/material";

import { FaHeartbeat } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: true,
    '@media screen and (max-width: 700px)': {
        width: '80%', // 700px 이하에서 회원가입 모달 창 크기 증가
        height: '85%'
    }
};

const BackImgStyle = {
    backgroundImage: `url(${LoginImg})`,
    backgroundSize: 'cover',
    '@media screen and (max-width: 700px)': {
        display: "none",
        width: '0%',
        height: '0%',
    }
}

const MobileLoginSize = {
    '@media screen and (max-width: 700px)': {
        height: '100vh',
        minHeight: '100vh'
    }
}

const AlignWeatherAndSignup = { // 700px 이하에서 날씨랑 시간 없애기
    marginRight: '35%',
    '@media screen and (max-width: 700px)': {
        display: 'none',
    }
}

function LoginPage(props) {
    const navigate = useNavigate();

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

    const handleLogin = () => {
      axios.post("http://3.34.8.240/login", { id: userId, password: userPwd })
          .then((res) => {
              console.log(res.data);
              localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
              localStorage.setItem("usernum", JSON.stringify(res.data.userNum));
              window.location.reload();
          })
          .catch((err) => {
              alert("로그인 실패");
              console.log(err);
          })
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        handleLogin();
    }

    const handleRequest = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'name':
                setSignUpRequest({ ...signUpRequest, name: value });
                break;
            case 'id':
                setSignUpRequest({ ...signUpRequest, id: value });
                break;
            case 'password':
                setSignUpRequest({ ...signUpRequest, password: value });
                break;
            case 'password2':
                setSignUpRequest({ ...signUpRequest, password2: value });
                break;
        }
    }

    const requestSignUp = () => {
        axios.post("http://3.34.8.240/signup", signUpRequest)
            .then((res) => {
                console.log(signUpRequest);
                console.log(res.data);
                alert('회원가입 성공');
                setOpen(false);
            })
            .catch((err) => {
                console.log(err);
                alert('회원가입 실패');
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
        <Grid container style={{ height: '100vh' }} >
            <CssBaseline />
            <Grid item sx={BackImgStyle} md={6} />
            <Grid item sx={MobileLoginSize} xs={12} md={6} component={Paper} elevation={12} square>
                <Cont >
                    <Link href='/' >
                        <Avatar sx={{ bgcolor: 'red', width: 56, height: 56, margin: '24px' }} >
                            <FaHeartbeat style={{ width: 56, height: 30 }} />
                        </Avatar>
                    </Link>
                    <Typography variant="h5" >
                        로그인 후 이용하실 수 있습니다
                    </Typography>
                    <LoginForm onSubmit={handleLoginClick}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="id"
                            value={userId}
                            label="아이디(이메일)"
                            onChange={handleUserId}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name='password'
                            value={userPwd}
                            type='password'
                            label="비밀번호"
                            onChange={handleUserPwd}
                        />
                        <LoginButton type={'submit'} disabled={!userId || !userPwd}>
                            로그인
                        </LoginButton>
                    </LoginForm>

                    <Grid container justifyContent="center" >
                        <Grid item sx={AlignWeatherAndSignup} >
                            <DisplayWeatherTime />
                        </Grid>
                        <Grid item>
                            <SignUpButton onClick={handleOpen}>회원가입</SignUpButton>
                        </Grid>
                    </Grid>

                    <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form onSubmit={handleSignUp}>
                                <div style={{ marginBottom: '5%' }}>
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
            </Grid>
        </Grid >
    );
}

export default LoginPage;

const Cont = styled.div`
    @media screen and (max-width: 700px) {
        justify-items: center;
        align-items: center;
        margin: 30% 2%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px 32px 0px;
`

const LoginForm = styled.form`
    width: 60%;
    margin-top: 8px;
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
`

const SignUpButton = styled.button`
    font-size: 18px;
    line-height: 49px;
    display: block;
    width: 100%;
    height: 49px;
    margin: 16px 0 7px;
    cursor: pointer;
    text-align: center;
    color: #505050;
    border: none;
    border-radius: 0;
    background-color: #fff;
`;