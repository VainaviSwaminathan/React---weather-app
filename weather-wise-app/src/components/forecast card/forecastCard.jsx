
import React from 'react';
import './forecastCard.css';


const ForecastCard = ({ day, temp, weather }) => {

    return (
        <div className="forecast-card">
            <h3>{day}</h3>
            <img src={`icons/${weatherData.weather[0].icon}.png`} alt={weather} />
            <p>{weather}</p>
            <p>Temp: {Math.round(temp)}°C</p>
        </div>
    );
};

export default ForecastCard;