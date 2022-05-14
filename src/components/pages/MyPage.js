import React, { useState, useEffect } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import axios from 'axios';
import { Modal, Box } from '@mui/material';
import { FaCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar'
import '../atoms/CustomCalendar.css';
import moment from 'moment';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '45%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: true,
    '@media screen and (max-width: 700px)': {
        width: '80%', // 700px 이하에서 회원가입 모달 창 크기 증가
        height: '50%'
    }
};

function MyPage() {
    const [clickVal, setClickVal] = useState(new Date());
    let RefineClickVal = moment(clickVal).format("YYYY-MM-DD"); // 1234-56-78
    const [userData, setUserData] = useState();
    const myToken = JSON.parse(localStorage.getItem('jwt'));

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    }

    const handleMypage = () => {
        axios.get('http://3.37.237.222/mypage', {
            params: {
                date: RefineClickVal
            },
            headers: {
                'Authorization': `Bearer ${myToken}`
            }
        })
            .then((res) => {
                setUserData(null);
                setUserData(res.data);
                console.log(RefineClickVal);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        handleMypage();
    }, [RefineClickVal]);

    if (!userData) return null;

    if (userData.length !== 0) {
        return (
            <div id="0">
                <Navigation />
                <PageContainer>
                    <HeaderCont>
                        <h1>마이 페이지</h1>
                        <h2>한달간의 감정, 음악 통계를 확인해보세요</h2>
                    </HeaderCont>

                    <ContentWebCont>
                        <Calendar onChange={setClickVal} value={clickVal} />
                        <CalendarValue>
                            <p style={{ marginTop: '0%', marginBottom: '2%' }}>{moment(clickVal).format("YYYY년 MM월 DD일")} </p>
                            <div style={{ color: 'white' }}>
                                {userData.map(user => (
                                    <div key={user.date}>
                                        <p style={{ marginTop: '0%', marginBottom: '0%' }} >일기</p> <br />
                                        <p style={{ marginTop: '0%', fontSize: '20px' }}>{user.content}</p> <br />
                                        <p style={{ marginTop: '0%', marginBottom: '0%' }} >기분</p> <br />
                                        <p style={{ marginTop: '0%', fontSize: '20px' }}>{user.feeling}</p> <br />
                                        <p style={{ marginTop: '2%', marginBottom: '0%' }} >음악</p> <br />
                                        <p style={{ marginTop: '0%', fontSize: '20px' }}>{user.songs}</p> <br />
                                        <p style={{ marginTop: '2%', marginBottom: '0%' }} >한 일</p> <br />
                                        <p style={{ marginTop: '0%', fontSize: '20px' }}>{user.whatTodo}</p>
                                    </div>
                                ))}
                            </div>
                        </CalendarValue>
                    </ContentWebCont>

                    <ContentMobileCont>
                        <FaCalendarAlt onClick={handleOpen} color='white' size='8vw' cursor='pointer' />
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Calendar onChange={setClickVal} value={clickVal} />
                                <ConfirmButton onClick={handleClose}>확인</ConfirmButton>
                            </Box>
                        </Modal>

                        <CalendarValue>
                            <p style={{ marginTop: '5%', marginBottom: '2%' }}>{moment(clickVal).format("YYYY년 MM월 DD일")} </p>
                            <div style={{ marginTop: '5%', color: 'white' }}>
                                {userData.map(user => (
                                    <div key={user.date}>
                                        <p style={{ marginTop: '0%', marginBottom: '0%' }} >일기</p> <br />
                                        <p style={{ marginTop: '0%', fontSize: '20px' }}>{user.content}</p> <br />
                                        <p style={{ marginTop: '0%', marginBottom: '0%' }} >기분</p> <br />
                                        <p style={{ marginTop: '0%', fontSize: '20px' }}>{user.feeling}</p> <br />
                                        <p style={{ marginTop: '2%', marginBottom: '0%' }} >음악</p> <br />
                                        <p style={{ marginTop: '0%', fontSize: '20px' }}>{user.songs}</p> <br />
                                        <p style={{ marginTop: '2%', marginBottom: '0%' }} >한 일</p> <br />
                                        <p style={{ marginTop: '0%', fontSize: '20px' }}>{user.whatTodo}</p>
                                    </div>
                                ))}
                            </div>
                        </CalendarValue>
                    </ContentMobileCont>
                </PageContainer>
            </div>
        );
    }

    else {
        return (
            <div id="0">
                <Navigation />
                <PageContainer>
                    <HeaderCont>
                        <h1>마이 페이지</h1>
                        <h2>한달간의 감정, 음악 통계를 확인해보세요</h2>
                    </HeaderCont>

                    <ContentWebCont>
                        <Calendar onChange={setClickVal} value={clickVal} />
                        <CalendarValue>
                            <p style={{ marginTop: '0%', marginBottom: '2%' }}>{moment(clickVal).format("YYYY년 MM월 DD일")} </p>
                            <div style={{ color: 'white' }}>
                                <p>No data</p>
                            </div>
                        </CalendarValue>
                    </ContentWebCont>

                    <ContentMobileCont>
                        <FaCalendarAlt onClick={handleOpen} color='white' size='8vw' cursor='pointer' />

                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Calendar onChange={setClickVal} value={clickVal} />
                                <ConfirmButton onClick={handleClose}>확인</ConfirmButton>
                            </Box>
                        </Modal>

                        <CalendarValue>
                            <p style={{ marginTop: '5%', marginBottom: '2%' }}>{moment(clickVal).format("YYYY년 MM월 DD일")} </p>
                            <div style={{ marginTop: '5%', color: 'white' }}>
                                <p>No data</p>
                            </div>
                        </CalendarValue>
                    </ContentMobileCont>

                </PageContainer>
            </div>
        )
    }
}

export default MyPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
  padding-top: 120px;
  background-color: black;
  .slick {
    margin: auto;
    width: 95%;
    height: 90vh;
  }
`

const HeaderCont = styled.div`
  margin-left: 5%;

  h1 {
      color: white;
      font-size: 50px;
  }
  h2 {
      color: #AE946A;
  }

  @media screen and (max-width: 700px) {
    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }
  }
`

const ContentWebCont = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
  display: flex;

  @media screen and (max-width: 830px) {
    display: none;
  }
`

const ContentMobileCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 5%;
  
  @media screen and (min-width: 830px) {
    display: none;
  }
`

const Wrapping = styled.div`
    display: flex;
    margin-top: 50px;

    @media screen and (max-width: 830px) {
        flex-direction: column;
    }
`

const CalendarValue = styled.div`
    box-sizing: border-box;
    color: white;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    p {
        font-size: 30px;
        font-weight: bold;
    }

    @media screen and (max-width: 830px) {
        margin-left: 0%;
    }
`

const ConfirmButton = styled.button`
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