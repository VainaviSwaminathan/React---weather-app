import ForecastCard from "../forecast card/forecastCard";
import React from 'react';
import './forecast.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Forecast = ({ forecastData }) => {
    if (!forecastData) {
        return null;
    }

    return (
        <div className="forecast-container">
            {forecastData.map((dayData, index) => (
                <ForecastCard
                    key={index}
                    day={days[(new Date().getDay() + index) % 7]}
                    temp={dayData.main.temp - 273.15}
                    weather={dayData.weather[0].main}
                    icon={forecastData[index].weather[0].icon}
                />
            ))}
        </div>
    );
};

export default Forecast;