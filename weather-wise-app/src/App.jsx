import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Map } from './components/map card/map'
import Message from './components/intial message/message'
import CurrentWeather from './components/current weather card/CurrentWeather'
import Forecast from './components/forecast/forecast'

function App() {
    const [weatherData, setWeatherData] = useState(null)
    const [forecastData, setForecastData] = useState([])
    const [mapSrc, setMapSrc] = useState('')

    const handleSearch = (data, src) => {
        setWeatherData(data)
        setMapSrc(src)
        setForecastData(forecast)
    };

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <main>
                <section className='current_weather'>
                    <CurrentWeather weatherData={weatherData} />
                    {mapSrc ? <Map src={mapSrc} /> : <Message text="Please search for a city to see the map" />}

                </section>

                <section className='forecast'>

                    <Forecast forecastData={forecastData} />

                </section>

            </main>

        </>
    )
}

export default App
