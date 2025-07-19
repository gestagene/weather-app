import { useState, useEffect, useRef } from 'react'
import LocationPanel from './LocationPanel'
import ForecastPanel from './ForecastPanel'
import './index.css'

export default function WeatherApp() {

  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        country: data.sys.country
      })
    } catch(error) {

    }
  }

  useEffect(() => {
    search("Manila");
    console.log(weatherData) 
  },[]) 

  return (
    <>
    <h2 className="title">
      MY WEATHER
    </h2>
    <LocationPanel inputRef={inputRef} search={search} />
    <ForecastPanel weatherData={weatherData} />
    </>
  )
}


