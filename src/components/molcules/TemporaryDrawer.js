import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {BiLogIn} from "react-icons/bi";
import {FiUser} from "react-icons/fi";

export default function TemporaryDrawer() {
    let navigate = useNavigate();

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

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={{
                backgroundColor: 'black',
                color: 'white',
                height: '100%',
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key={'Home'}>
                    <Btn onClick={handleClick} id={'Home'}>Home</Btn>
                </ListItem>
                <ListItem button key={'Diary'}>
                    <Btn onClick={handleClick} id={'Diary'}>Diary</Btn>
                </ListItem>
                <ListItem button key={'Home'}>
                    <Btn onClick={handleClick} id={'Music'}>Music & Behavior</Btn>
                </ListItem>
                <ListItem button key={'Home'}>
                    <Btn onClick={handleClick} id={'Restaurant'}>Restaurant</Btn>
                </ListItem>
                <ListItem button key={'Home'}>
                    <Btn onClick={handleClick} id={'Community'}>Community</Btn>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <Btn onClick={handleClick} id={'Login'}>
                    <BiLogIn id={'Login'} className={'login'} />
                    <div id={'Login'} >Login</div>
                </Btn>
                <Btn onClick={handleClick} id={'My Page'}>
                    <FiUser id={'My Page'} className={'my_page'} />
                    <div id={'My Page'} >My Page</div>
                </Btn>
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div style={{color: 'white', fontSize: '1.6rem'}} onClick={toggleDrawer(anchor, true)}>
                        <GiHamburgerMenu/></div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};


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
  margin-top: 10%;
  &:hover {
    transform: scale(1.05);
  }
`;