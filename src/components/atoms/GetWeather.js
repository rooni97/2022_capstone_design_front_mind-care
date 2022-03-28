import React, { useState } from 'react';

function GetWeather() {
    const WEATHER_API_KEY = "a9c28c4ba75b36cf91e22559a5370c5a";
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Suwon&appid=${WEATHER_API_KEY}&units=metric`;
    const [weatherStatus, setWeatherStatus] = useState('');

    fetch(WEATHER_API_URL)
        .then(response => response.json())
        .then((data) => {
            setWeatherStatus(data.weather[0].main);
        });

    return (
        <div>{weatherStatus}</div>
    )
}

export default GetWeather;