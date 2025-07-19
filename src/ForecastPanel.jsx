import React from 'react'
import clear from './assets/clear.png'
import humidity from './assets/humidity.png'
import wind from './assets/wind.png'

export default function ForecastPanel({ weatherData }) {
    
    return (
        <div className="forecast-container">
            <div className="info">
                <img className="weather-condition" src={weatherData.icon || clear}/>
                <h1 className="temperature"> {weatherData.temperature}°C</h1>
                <h1 className="city">{weatherData.location}, {weatherData.country}</h1>
                <div className="flex">
                <span className="humidity"><img className="humidity-img" src={humidity}/>{weatherData.humidity}%</span>
                <span className="wind"><img className="wind-img"src={wind}/>{weatherData.windSpeed} Km/h</span>
                </div>
                </div>    
        </div>
    )
}