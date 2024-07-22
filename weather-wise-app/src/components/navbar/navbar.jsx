import './navbar.css'
import React, { useState } from 'react'
import axios from 'axios';

function Navbar({ onSearch, onError }) {

    const [city, setCity] = useState('')

    async function handleSearch() {
        try {

            const currentWeather = await axios({
                method: 'get',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c106ca56f8a7ef1a5ba4381e1fbabff6`
            })

            const mapSrc = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`

            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c106ca56f8a7ef1a5ba4381e1fbabff6`
            );
            const forecastData = forecastResponse.data.list.filter((_, index) => index % 8 === 0);

            console.log(forecastData)

            onSearch(currentWeather.data, mapSrc, forecastData)
        }
        catch (error) {
            console.log("error fetching data", error)
            onError()

        }
    }




    return (
        <nav>
            <h1 className="font">WeatherWise</h1>
            <div>
                <div id="search_container">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    <input id="search" type="text" placeholder='Enter city name' onChange={(e) => setCity(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <span className="material-symbols-outlined">
                    help
                </span>
            </div>

        </nav>
    )
}

export { Navbar }