
import React from 'react';
import './forecastCard.css';


const ForecastCard = ({ day, temp, weather, icon }) => {

    return (
        <div className='font' id="forecast-card">
            <h3>{day}</h3>
            <img src={`icons/${icon}.png`} alt={weather} />
            <p>{weather}</p>
            <p>Temp: {Math.round(temp)}°C</p>
        </div>
    );
};

export default ForecastCard;