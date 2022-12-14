import React, { useEffect, useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import GetWeather from "../atoms/GetWeather";
import GetUserTime from "../atoms/GetUserTime";
import GetLocation from "../atoms/GetLocation";
import Post from "../atoms/Post";
import { Modal, Box, Typography, TextField } from '@mui/material';
import axios from 'axios';
import Pagination from '../atoms/Pagination';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '55%',
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

function CommunityPage(props) {
  const [userTitle, setUserTitle] = useState('');
  const [userText, setUserText] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [communityInfo, setCommunityInfo] = useState({});
  const [commentInfoProp, setCommentInfo] = useState([]);
  const [communityLength, setCommunityLength] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nowPage, setNowPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const userNum = Number(localStorage.getItem("usernum"));
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  }

  const handleTitle = (e) => {
    setUserTitle(e.target.value);
  }

  const handleNickname = (e) => {
    setUserNickname(e.target.value);
  }

  const handleText = (e) => {
    setUserText(e.target.value);
  }

  const handleWriteClick = (e) => {
    e.preventDefault();
    requestCommunity();
  }

  const getCommunityListByPage = (e) => {
    let whatPage = Number(e.target.innerText);
    axios.get(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/communities/${whatPage}`, {
      headers: {
        ['x-user-num']: localStorage.getItem("usernum"),
        ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
      }
    })
      .then((res) => {
        setCommunityInfo(res.data);
      })
  }

  const getCommunityList = () => {
    axios.get(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/communities/1`, {
      headers: {
        ['x-user-num']: localStorage.getItem("usernum"),
        ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
      }
    })
      .then((res) => {
        setCommunityInfo(res.data);
        console.log(res.data);
      })
  }

  const GetComment = () => {
    axios.get(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/comment`, {
      headers: {
        ['x-user-num']: localStorage.getItem("usernum"),
        ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
      }
    })
      .then((res) => {
        setCommentInfo(res.data);
        console.log(res.data);
      })
  }

  useEffect(() => {
    getCommunityList();
    GetComment();
  }, [communityLength, isLoading])

  // 게시글 작성하기
  const requestCommunity = () => {
    axios.post(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/community`, { title: userTitle, content: userText, userNum: userNum, name: userNickname }, {
      headers: {
        ['x-user-num']: localStorage.getItem("usernum"),
        ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
      }
    })
      .then((res) => {
        alert('게시글 작성 성공');
        setUserText('');
        setUserTitle('');
        setUserNickname('');
        setCommunityLength(res.data.total);
      })
      .catch((err) => {
        console.log(err);
        alert('게시글 작성 실패');
      })
  }

  const parentFunction = (x) => {
    setIsLoading(x);
  }

  return (
    <div id="0">
      <Navigation />
      <PageContainer>
        <div style={{ height: '10%', marginBottom: '5%' }}>
          <h1>사용자 커뮤니티</h1>
          <h2 style={{ color: '#AE946A' }}>SHARE YOUR OPINION WITH OTHERS</h2>
          <h2 style={{ color: '#E5E5E5' }}>여러분의 감정 관리법을 다른 사람들과 공유하고 의견을 나눠보세요.</h2>
        </div>
        <div style={{ width: '100%', height: '5%', display: 'flex', fontSize: '2rem' }}>
          {/*<h1 style={{color: 'white', marginLeft: 80}}>인기</h1>*/}
          <div style={{ width: '100%', display: "flex", justifyContent: 'right', alignItems: 'center', marginRight: '5%' }}>
            <CustomButton style={{ marginRight: '2%' }} onClick={handleOpen} >게시글 작성</CustomButton>
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <p>게시글 작성</p>
                <form onSubmit={handleWriteClick}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="title"
                    value={userNickname}
                    label="별명"
                    size="small"
                    onChange={handleNickname}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="title"
                    value={userTitle}
                    label="제목"
                    onChange={handleTitle}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    multiline={true}
                    rows={8}
                    required
                    fullWidth
                    name="text"
                    value={userText}
                    label="내용"
                    onChange={handleText}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <LoginButton style={{ marginRight: '2%' }} type={'submit'}>확인</LoginButton>
                    <LoginButton onClick={handleClose}>취소</LoginButton>
                  </div>
                </form>
              </Box>
            </Modal>
          </div>
        </div>

        <div >
          {communityInfo.list !== undefined ?
            communityInfo.list.map((list) => (<Post key={list.cretim} list={list} commentInfoProp={commentInfoProp} parentFunction={parentFunction} />))
            : <div></div>
          }
          {communityInfo.list !== undefined ?
            <div onClick={getCommunityListByPage}>
              <Pagination
                total={communityInfo.total}
                pageSize={pageSize}
                nowPage={nowPage}
                setNowPage={setNowPage}
              />
            </div>
            : <div></div>
          }
        </div>
      </PageContainer >
    </div >
  );
}

export default CommunityPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
  padding-top: 120px;
  background-color: black;
  h1 {
    color: white;
    margin-left: 5%;
    font-size: 5vw;
    width: 50%;
    @media screen and (max-width: 700px) {
      font-size: 5vh;
      width: 100%;
    }
  }
  .recent {
    color: white;
    margin-left: 5%;
    font-size: 5vw;
    height: 55%;
    width: 9%;
    border-bottom: 4px solid red;

    @media screen and (max-width: 700px) {
      font-size: 4vh;
      height: 40%;
      width: 24%;
      border-bottom: 3px solid red;
    }
  }
  h2 {
    font-size: 2vw;
    margin-left: 5%;
    @media screen and (max-width: 700px) {
      font-size: 1.5vh;
    }
  }
`;

const CustomButton = styled.button`
  width: 20%;
  height: 40%;
  font-size: 20px;
  border: none;
  background-color: #1e1f21;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  float: left;
  margin-top: 10px;
  //margin-right: 5%;
  cursor: pointer;
  display: block;
  
  @media screen and (max-width: 700px) {
    width: 50%;
  }
`;

const LoginButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 20%;
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