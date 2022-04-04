import React, {useState} from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Map from "../atoms/Map";
import CreateMap from "../atoms/CreateMap";
import {CircularProgress} from "@mui/material";

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
        setFood(e.target.id);
    }

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>오늘은 이거 어때요?</h1>
                {/*<form className="inputForm" onSubmit={handleSubmit}>*/}
                {/*    <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />*/}
                {/*    <button type="submit">검색</button>*/}
                {/*</form>*/}
                <button onClick={handleClick} id={'햄버거'}>햄버거</button>
                <button onClick={handleClick} id={'카페'}>카페</button>
                <button onClick={handleClick} id={'스시'}>스시</button>
                <div style={{width: '60vw', height: '60vh', backgroundColor: 'white'}}>
                    <CreateMap food={food} />
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