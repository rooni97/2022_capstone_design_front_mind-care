import React, {useState} from 'react';
import styled from "styled-components";
import GetWeather from "../atoms/GetWeather";
import GetKorTime from "../atoms/GetKorTime";
import {
    WiDaySunny,
    WiThunderstorm,
    WiShowers,
    WiRain,
    WiSnow,
    WiFog,
    WiCloudy
} from "react-icons/wi";
import {CircularProgress} from "@mui/material";

function DisplayWeatherTime(props) {
    const [loading, setLoading] = useState(true);

    let CurrentWeather = GetWeather(setLoading);
    let CurrentUserTime = GetKorTime();
    const CurrentWeatherId = CurrentWeather[0]; // 800 = sunny ...
    
    const selectIcon = () => {
        let iconId =
          CurrentWeatherId === 800 ? 0 : (parseInt(CurrentWeatherId) / 100).toFixed(0);
        switch (iconId) {
          case '0':
            return <WiDaySunny size="50px" color="red" />;
          case '2':
            return <WiThunderstorm size="50px" color="black" />;
          case '3':
            return <WiShowers size="50px" color="blue" />;
          case '5':
            return <WiRain size="50px" color="navy" />;
          case '6':
            return <WiSnow size="50px" color="white" />;
          case '7':
            return <WiFog size="50px" color="grey" />;
          case '8':
            return <WiCloudy size="50px" color="grey" />;
        }
      };

    return (
        <WeatherWrap>
            {loading ? <CircularProgress size={30} sx={{margin: '0 10px'}} /> : selectIcon()}
            <p style={{fontSize: 25, fontWeight: 'bold', color: 'E5E5E5'}}>{CurrentUserTime}</p>
        </WeatherWrap>
    );
}

export default DisplayWeatherTime;

const WeatherWrap = styled.div`
    display: flex;
    justify-contents: center;
    align-items: center;
`