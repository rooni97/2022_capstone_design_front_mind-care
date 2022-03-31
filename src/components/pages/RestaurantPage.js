import React from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Map from "../atoms/Map";

function RestaurantPage(props) {

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <h1 style={{color: 'white', marginLeft: 80, fontSize: 50}}>오늘은 이거 어때요?</h1>
                <Map />
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