import React from 'react';
import {Box, Modal} from "@mui/material";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '70%',
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

function PlayMusicModal(props) {
    return (
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <iframe width="100%" height="80%" src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
                        title="YouTube video player" frameBorder="0" id={'play'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <Like>
                    <FiHeart style={{marginRight: '1%'}} />
                        </Like>
                <Button onClick={props.handleClose}>닫기</Button>
            </Box>
        </Modal>
    );
}

export default PlayMusicModal;

const Button = styled.button`
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
`

const Like = styled.div`
  margin-top: 2%;
  width: 10vw;
  color: black;
  font-size: 2vw;
  display: flex;
  cursor: pointer;
  div {
    font-size: 1.5vw;
  }
  :hover {
    color: violet;
  }
`