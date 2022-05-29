import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FiUser } from "react-icons/fi";
import { TextField } from "@mui/material";
import { Modal, Box, Button } from '@mui/material';
import axios from 'axios';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

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

const buttonStyle = {
    border: '1px solid #000',
    marginRight: '2px',
    color: '#000000',
    bgcolor: '#ffffff',
    '&:hover': {
        bgcolor: '#1976d2',
        color: '#ffffff'
    }
}

const buttonConfirm = {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '49px',
    display: 'block',
    width: '20%',
    height: '49px',
    margin: '16px 0 7px',
    cursor: 'pointer',
    textAlign: 'center',
    color: '#fff',
    border: 'none',
    background: '#1e1f21',
    marginRight: '5px'
}


export default function Post({ list, commentInfoProp, parentFunction }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [userTitle, setUserTitle] = useState('');
    const [userText, setUserText] = useState('');
    const [userNickname, setUserNickname] = useState('');
    const [modifiedDate, setModifiedDate] = useState('');
    const [userComment, setUserComment] = useState([]);
    const fromParent = commentInfoProp;
    const [loading, setLoading] = useState(true);
    const commentByCommunityNum = fromParent.filter((obj) => {
        if (obj.communityNum === list.communityNum) {
            return obj
        }
    })

    const userNum = Number(localStorage.getItem("usernum"));
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    }

    const handleTitle = (e) => {
        setUserTitle(e.target.value);
    }

    const handleText = (e) => {
        setUserText(e.target.value);
    }

    const handleNickname = (e) => {
        setUserNickname(e.target.value);
    }

    const handleModifyClick = (e) => {
        e.preventDefault();
        requestCommunityModify();
    }

    const handleDeleteClick = (e) => {
        e.preventDefault();
        requestCommunityDelete();
    }

    const handleUserComments = (e) => {
        setUserComment(e.target.value);
    }

    const handleCommentClick = (e) => {
        e.preventDefault();
        requestComment();
    }

    // 댓글 작성하기
    const requestComment = () => {
        setLoading(true);
        axios.post(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/comment`, { content: userComment, userNum: userNum, communityNum: list.communityNum, name: userNickname }, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
        })
            .then((res) => {
                alert('댓글 작성 성공');
                setUserNickname('');
                setUserComment('');
                setLoading(false);
            })
            .catch((err) => {
                alert('댓글 작성 실패');
            })
    }

    // 댓글 삭제하기
    const requestCommentDelete = (e) => {
        setLoading(true);
        axios.delete(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/comment/${e}`, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
        })
            .then((res) => {
                alert('댓글 삭제 성공');
                setLoading(false);
            })
            .catch((err) => {
                alert('댓글 삭제 실패')
            })
    }

    // 게시글 수정하기
    const requestCommunityModify = () => {
        setLoading(true);
        axios.put(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/community/${list.communityNum}`, { title: userTitle, content: userText }, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
        })
            .then((res) => {
                setModifiedDate(res.data);
                alert('게시글 수정 성공');
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                alert('게시글 수정 실패');
            })
    }

    // 게시글 삭제하기
    const requestCommunityDelete = () => {
        setLoading(true);
        axios.delete(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/community/${list.communityNum}`, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
        })
            .then((res) => {
                alert('게시글 삭제 성공');
                setLoading(false);
            })
            .catch((err) => {
                alert('게시글 삭제 실패');
            })
    }

    useEffect(() => {
        parentFunction(loading);
    }, [loading])

    return (
        <Card sx={{ width: '90%', margin: 'auto', marginBottom: '2rem' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#AE946A', width: '100%', padding: '5%' }} aria-label="recipe" variant={'rounded'}>
                        {list.name}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={list.title}
                subheader={list.credat}
            />
            {/*<CardMedia*/}
            {/*    component="img"*/}
            {/*    height="194"*/}
            {/*    image="/static/images/cards/paella.jpg"*/}
            {/*    alt="Paella dish"*/}
            {/*/>*/}
            <CardContent>
                <Typography variant="h5" color="text.secondary">
                    {list.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/*<IconButton aria-label="add to favorites">*/}
                {/*    <FavoriteIcon />*/}
                {/*</IconButton>*/}
                {/*<IconButton aria-label="share">*/}
                {/*    <ShareIcon />*/}
                {/*</IconButton>*/}
                <Button onClick={handleOpen} sx={buttonStyle} size='small' variant="contained">수정</Button>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <p>게시글 수정</p>
                        <form onSubmit={handleModifyClick}>
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
                                <button style={buttonConfirm} type={'submit'}>확인</button>
                                <button style={buttonConfirm} onClick={handleClose}>취소</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
                <Button onClick={handleDeleteClick} sx={buttonStyle} size='small' variant="contained">삭제</Button>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>댓글 {list.commentCnt}개</Typography>
                    {commentByCommunityNum !== null ?
                        commentByCommunityNum.map((obj) =>
                            <Typography key={obj.cretim} paragraph variant={'h6'}>
                                <CardHeader
                                    avatar={
                                        <FiUser />
                                    }
                                    action={
                                        <Button onClick={() => { requestCommentDelete(obj.commentNum) }} sx={buttonStyle} size='small' variant="contained">댓글 삭제</Button>
                                    }
                                    title={obj.name}
                                    subheader={obj.credat}
                                />
                                <CardContent>
                                    <Typography>{obj.content}</Typography>
                                </CardContent>
                            </Typography>
                        )
                        : <div></div>
                    }
                    <form onSubmit={handleCommentClick}>
                        <TextField size={'small'} sx={{ width: '10%', marginRight: '2%' }} onChange={handleNickname} id="outlined-basic" label="닉네임" variant="outlined" />
                        <TextField size={'small'} sx={{ width: '30%' }} onChange={handleUserComments} id="outlined-basic" label="댓글을 입력해주세요." variant="outlined" />
                        <input style={{ height: '2.5rem', width: '5%' }} type={'submit'} />
                    </form>
                </CardContent>
            </Collapse>
        </Card>
    );
}