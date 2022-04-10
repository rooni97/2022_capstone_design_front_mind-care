import React, { useState, useEffect } from 'react';
import getLocation from "./GetLocation";

function GetWeather(setLoading) {
    const [weatherStatus, setWeatherStatus] = useState('');

    useEffect(() => {
        let lat, lon;
        setLoading(true);
        getLocation().then(res => {
            lat = res.coords.latitude;
            lon = res.coords.longitude;
            const WEATHER_API_KEY = "a9c28c4ba75b36cf91e22559a5370c5a";
            const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

        fetch(WEATHER_API_URL)
            .then(response => response.json())
            .then((data) => {
                setWeatherStatus({
                    id: data.weather[0].id,
                    main: data.weather[0].main,
                });
                setLoading(false);
            });
        })
    }, []);
    
    const WeatherData = [weatherStatus.id, weatherStatus.main];
    return WeatherData
}

export default GetWeather;