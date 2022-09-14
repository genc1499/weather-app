import {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import SingleCityWeather from './SingleCityWeather.js';
import clouds from '../assets/Clouds.jpg';
import rain from '../assets/rain.jpg';
import thunderstorm from '../assets/thunderstorm.jpg';
import clear from '../assets/clear.jpg';
import snow from '../assets/snow.jpg';
import drizzle from '../assets/drizzle.jpg';
import fog from '../assets/fog.jpg';
import { useContext } from "react";
import { mySatelite } from "../App.js";

const WeatherResults = (props) =>{
    
    const weatherDeets = useContext(mySatelite);
    const [seeMore, setSeeMore]=useState(false)


    const handleClick = ()=>{
        setSeeMore(!seeMore);
    }

    return (
        <>
     
        <section>
            <main>
          
            {
            props.weatherDescription==="Clear"?
            <Link to = '/weather'>
            <div style={{ backgroundImage:`url(${clear})` }}className='weather-cards'>
            <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
            <h3>{Math.round(props.temp-273.15)}°C</h3>
             </div>
            </Link> :

            props.weatherDescription==="Clouds"?
            <Link to = '/weather'>
            <div style={{ backgroundImage:`url(${clouds})` }}className='weather-cards'>
            <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
            <h3>{Math.round(props.temp-273.15)}°C</h3>
             </div>
            </Link> :

            props.weatherDescription==="Rain"?
            <Link to = '/weather'><div style={{ backgroundImage:`url(${rain})` }}className='weather-cards'>
            <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
            <h3>°{Math.round(props.temp-273.15)}°C</h3> </div>
            </Link>:

            props.weatherDescription==="Thunderstorm"?
            <Link to = '/weather'><div style={{ backgroundImage:`url(${thunderstorm})` }}className='weather-cards'>
            <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
            <h3>°{Math.round(props.temp-273.15)}°C</h3> </div>
            </Link>:
            
            props.weatherDescription==="Clear"?
            <Link to = '/weather'><div style={{ backgroundImage:`url(${clear})` }}className='weather-cards'>
            <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
            <h3>°{Math.round(props.temp-273.15)}°C</h3> </div>
            </Link>:
            
             props.weatherDescription==="Snow"?
             <Link to = '/weather'><div style={{ backgroundImage:`url(${snow})` }}className='weather-cards'>
             <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
             <h3>°{Math.round(props.temp-273.15)}°C</h3> </div>
             </Link>:

            props.weatherDescription==="Drizzle"?
            <Link to = '/weather'><div style={{ backgroundImage:`url(${drizzle})` }}className='weather-cards'>
            <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
            <h3>°{Math.round(props.temp-273.15)}°C</h3> </div>
            </Link>:

            props.weatherDescription==="Fog"?
            <Link to = '/weather'><div style={{ backgroundImage:`url(${fog})` }}className='weather-cards'>
            <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
            <h3>°{Math.round(props.temp-273.15)}°C</h3> </div>
            </Link>:null
            }
            </main>

        </section>
        </>
    )

}

export default WeatherResults;