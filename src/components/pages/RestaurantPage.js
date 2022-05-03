import React, { useState } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Map from "../atoms/Map";
import CreateMap from "../atoms/CreateMap";
import { CircularProgress } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import smile1 from "../../media/smile1.png";
import sad from "../../media/sad.png";
import hamburger from "../../media/hamburger.png";
import coffee from '../../media/coffee.png';
import sushi from '../../media/sushi.png';
import {
    GiSushis,
    GiCoffeeCup,
    GiHamburger
} from "react-icons/gi";

function RestaurantPage(props) {
    const [InputText, setInputText] = useState('')
    const [food, setFood] = useState('');
    const [loading, setLoading] = useState(true);


    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFood(InputText)
        setInputText('')
    }

    const handleClick = (e) => {
        //setFood(e.target.id); icons에 onClick event를 걸었을 때 DOM의 형태가 다르기 때문에 아래와 같은 e.currentTarget.id를 사용하였음
        setFood(e.currentTarget.id);
    }

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <div style={{ width: '100%', marginBottom: '4vh' }}>
                    <Fade direction={"up"} cascade={true}>
                        <h1 style={{ color: 'white', fontSize: '4vw', marginLeft: 80 }}>오늘 뭐 먹지?</h1>

                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 80 }}>
                            <h1 style={{ color: 'white', fontSize: '4vw', marginRight: 100 }}>기분 <br />좋을 때도,</h1>
                            <img style={{ width: '20%' }} src={smile1} alt='smile' />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 80 }}>
                            <h1 style={{ color: 'white', marginRight: 100, fontSize: '4vw' }}>기분 <br />나쁠 때도,</h1>
                            <img style={{ width: '20%' }} src={sad} alt='sad' />
                        </div>

                        <h1 style={{ color: 'white', fontSize: '4vw', marginBottom: '10%', marginLeft: 80 }}>우리, <br />먹고는 살아야죠.</h1>
                        <h1 style={{ color: 'white', fontSize: '4vw', marginLeft: 80 }}>여러분의 감정에 맞는 <br />맛있는 음식을 추천해드릴게요.</h1>
                        <h1 style={{ color: 'white', fontSize: '4vw', marginLeft: 80 }}>지금 바로 주변 맛집을 확인해보세요.</h1>
                    </Fade>
                </div>

                <div style={{ display: 'flex', marginLeft: 80 }}>
                    <Fade direction={"up"} cascade={false}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <FoodIcons onClick={handleClick} id='햄버거'>
                                <GiHamburger size='8vw' />
                            </FoodIcons>
                            <FoodIcons onClick={handleClick} id='카페'>
                                <GiCoffeeCup size='8vw' />
                            </FoodIcons>
                            <FoodIcons onClick={handleClick} id='스시'>
                                <GiSushis size='8vw' />
                            </FoodIcons>
                            {/* <button style={{ width: '70px', height: '70px', marginBottom: '20px' }} onClick={handleClick} id={'햄버거'}>햄버거</button>
                                <button style={{ width: '70px', height: '70px' }} onClick={handleClick} id={'카페'}>카페</button>
                                <button style={{ width: '70px', height: '70px' }} onClick={handleClick} id={'스시'}>스시</button> */}
                        </div>
                        <div style={{ marginLeft: '4vw', width: '60vw', height: '60vh', backgroundColor: 'white' }}>
                            <CreateMap food={food} />
                        </div>
                    </Fade>
                </div>
            </PageContainer>
        </div>
    );
}

export default RestaurantPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
  padding-top: 120px;
  background-color: black;
`

const FoodIcons = styled.a`
    cursor: pointer;
    margin-bottom: 3vh;
    color: white;
`