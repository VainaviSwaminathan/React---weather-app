// src/components/CurrentWeather.jsx
import React from 'react';
import './currentWeather.css';

const CurrentWeather = ({ weatherData }) => {
    if (!weatherData) {
        return null;
    }

    const { name, main, weather } = weatherData;
    return (
        <div id="current-weather-card" className='font'>
            <div className='title_current_weather'>
                <p>{name}</p>
                <p>{weather[0].description}</p>
            </div>

            <div className='subtitle_current_weather'>
                <h1>{Math.round(main.temp - 273.15)}°C</h1>
                <img src={`icons/${weatherData.weather[0].icon}.png`} alt={weather[0].description} />

            </div>

            <div className='addInfo_current_weather'>

                <p><span className="material-symbols-outlined">
                    humidity_percentage
                </span>{main.humidity}%</p>
                <p><span className="material-symbols-outlined">
                    air
                </span> {weatherData.wind.speed} m/s</p>
                <p> <span className="material-symbols-outlined">
                    water
                </span>{weatherData.main.
                    sea_level} m</p>

            </div>





        </div>
    );
};

export default CurrentWeather;