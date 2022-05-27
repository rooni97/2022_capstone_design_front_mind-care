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
import { Modal, Box } from '@mui/material';
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

export default function Post({ list }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [userTitle, setUserTitle] = useState('');
    const [userText, setUserText] = useState('');
    const [userNickname, setUserNickname] = useState('');
    const [modifiedDate, setModifiedDate] = useState('');
    const [userComment, setUserComment] = useState([]);
    const [commentInfo, setCommentInfo] = useState([]); // communityNum

    const commentByCommunityNum = commentInfo.filter((obj) => {
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
        requestComment();
    }

    // 댓글 작성하기
    const requestComment = () => {
        axios.post(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/comment/${list.communityNum}`, { content: userComment, userNum: userNum, communityNum: list.communityNum, name: userNickname }, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
        })
            .then((res) => {
                alert('comment post success');
                setUserComment('');
                setUserNickname('');
            })
            .catch((err) => {
                alert('comment post fail');
            })
    }

    // 댓글 삭제하기
    const requestCommentDelete = (e) => {
        axios.delete(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/community/comments/${e}`, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
        })
            .then((res) => {
                alert('Comment delete success');
            })
            .catch((err) => {
                alert('comment delete fail')
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
            })
    }

    useEffect(() => {
        GetComment();
    }, [])

    // 게시글 수정하기
    const requestCommunityModify = () => {
        axios.put(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/community/${list.communityNum}`, { title: userTitle, content: userText }, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
        })
            .then((res) => {
                console.log(res.data);
                setModifiedDate(res.data);
                alert('Modify success');
            })
            .catch((err) => {
                console.log(err);
                alert('Modify fail');
            })
    }

    // 게시글 삭제하기
    const requestCommunityDelete = () => {
        axios.delete(`http://${process.env.REACT_APP_REQUEST_URL}:8080/api/community/${list.communityNum}`, {
            headers: {
                ['x-user-num']: localStorage.getItem("usernum"),
                ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
            }
        })
            .then((res) => {
                console.log(res.data);
                console.log(list.communityNum);
                alert('Delete success');
            })
            .catch((err) => {
                console.log(err);
                alert('Delete Fail');
            })
    }

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
                <button onClick={handleOpen}>수정</button>
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
                                <button style={{ marginRight: '2%' }} type={'submit'}>확인</button>
                                <button onClick={handleClose}>취소</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
                <button onClick={handleDeleteClick}>삭제</button>
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
                                        <button onClick={() => { requestCommentDelete(obj.commentNum) }}>
                                            댓글 삭제
                                        </button>
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