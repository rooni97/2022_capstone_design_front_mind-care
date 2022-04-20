import * as React from 'react';
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
import {blue, red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {FiUser} from "react-icons/fi";
import {TextField} from "@mui/material";

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

export default function Post() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ width: '90%', margin: 'auto', marginBottom: '2rem'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#AE946A', width: '100%', padding: '5%' }} aria-label="recipe" variant={'rounded'}>
                        작성자이름
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="게시글 제목입니다."
                subheader="2022-04-07"
            />
            {/*<CardMedia*/}
            {/*    component="img"*/}
            {/*    height="194"*/}
            {/*    image="/static/images/cards/paella.jpg"*/}
            {/*    alt="Paella dish"*/}
            {/*/>*/}
            <CardContent>
                <Typography variant="h5" color="text.secondary">
                    안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.
                    안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.
                    안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.안녕하세요. 게시글 샘플입니다.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/*<IconButton aria-label="add to favorites">*/}
                {/*    <FavoriteIcon />*/}
                {/*</IconButton>*/}
                {/*<IconButton aria-label="share">*/}
                {/*    <ShareIcon />*/}
                {/*</IconButton>*/}
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
                    <Typography paragraph>댓글 3개</Typography>
                    <Typography paragraph variant={'h6'}>
                        <CardHeader
                            avatar={
                                <FiUser />
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="이창윤"
                            subheader="2022-04-07"
                        />
                        <CardContent>
                            <Typography>안녕하세요.</Typography>
                        </CardContent>
                    </Typography>
                    <Typography paragraph>
                        <CardHeader
                            avatar={
                                <FiUser />
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="이창윤"
                            subheader="2022-04-07"
                        />
                        <CardContent>
                            <Typography>안녕하세요.</Typography>
                        </CardContent>
                    </Typography><Typography paragraph>
                    <CardHeader
                        avatar={
                            <FiUser />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="이창윤"
                        subheader="2022-04-07"
                    />
                    <CardContent>
                        <Typography>안녕하세요.</Typography>
                    </CardContent>
                </Typography>
                    <form>
                        <TextField size={'small'} sx={{width: '30%'}} id="outlined-basic" label="댓글을 입력해주세요." variant="outlined" />
                        <input style={{ height: '2.5rem', width: '5%' }} type={'submit'} />
                    </form>
                </CardContent>
            </Collapse>
        </Card>
    );
}