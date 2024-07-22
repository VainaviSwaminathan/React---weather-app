import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Map } from './components/map card/map'
import Message from './components/intial message/message'
import CurrentWeather from './components/current weather card/CurrentWeather'
import Forecast from './components/forecast/forecast'
import WeatherTips from './components/weather tips/WeatherTip';

function App() {
    const [weatherData, setWeatherData] = useState(null)
    const [forecastData, setForecastData] = useState([])
    const [mapSrc, setMapSrc] = useState('')
    const [noResults, setNoResults] = useState(false)

    function handleSearch(data, src, forecast) {
        setWeatherData(data)
        setMapSrc(src)
        setForecastData(forecast)
        setNoResults(false)
    };

    function handleError() {
        setWeatherData(null)
        setMapSrc('')
        setForecastData([])
        setNoResults(true)
    }

    return (
        <>
            <Navbar onSearch={handleSearch} onError={handleError} />
            <main>
                {noResults ? (<Message text="City not found..." />) : (
                    <>

                        <section className='current_weather'>
                            <CurrentWeather weatherData={weatherData} />
                            {mapSrc ? <Map src={mapSrc} /> : <Message text="Please search for a city to see the map" />}

                        </section>
                        <Forecast forecastData={forecastData} />
                        <WeatherTips weatherData={weatherData} />

                    </>


                )}




            </main>

        </>
    )
}

export default App
