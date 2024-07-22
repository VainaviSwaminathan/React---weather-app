import React from 'react'
import './WeatherTips.css'

const WeatherTips = ({ weatherData }) => {
    const getWeatherTip = (weather) => {
        if (!weather) return 'Search for a city to get weather tips!'

        const temperature = weather.main.temp - 273.15 // Convert from Kelvin to Celsius
        const condition = weather.weather[0].main.toLowerCase()

        if (condition.includes('rain')) {
            return 'It\'s raining! Don\'t forget your umbrella and wear waterproof shoes.'
        } else if (condition.includes('snow')) {
            return 'Snow is falling! Wear warm clothes, a heavy coat, and boots.'
        } else if (condition.includes('clear')) {
            if (temperature > 30) {
                return 'It\'s sunny and hot! Wear light clothing, sunglasses, and stay hydrated.'
            } else if (temperature < 10) {
                return 'It\'s sunny but cold! Wear a warm jacket and maybe a hat.'
            } else {
                return 'It\'s sunny with moderate temperature. A light jacket or sweater should be fine.'
            }
        } else if (condition.includes('clouds')) {
            return 'It\'s cloudy. A light jacket might be needed.'
        } else if (condition.includes('thunderstorm')) {
            return 'There\'s a thunderstorm! Stay indoors and avoid outdoor activities.'
        } else {
            return 'Check the weather condition and dress accordingly.'
        }
    }

    return (
        <div className='font' id="weather-tips-container">
            <h2>Daily Weather Tips</h2>
            <p>{getWeatherTip(weatherData)}</p>
        </div>
    )
}

export default WeatherTips