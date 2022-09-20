import {Link} from'react-router-dom';
import { useContext } from "react";
import { mySatelite } from "../App.js";

const SingleCityWeather = () =>{
    const weatherDeets = useContext(mySatelite);
  

    return(
        <>
           

            <div className='full-weather-card'>
                <h4>Temperature:{Math.round(weatherDeets.main.temp-273.15)}°C</h4>
                <h4>Feels Like:{Math.round(weatherDeets.main.feels_like-273.15)}°C</h4>
                <h4>Humidity:{weatherDeets.main.humidity}%</h4>
                <h4>High:{Math.round(weatherDeets.main.temp_max-273.15)}°C</h4>
                <h4>Low:{Math.round(weatherDeets.main.temp_min-273.15)}°C</h4>
                <Link to='/'><button>Back to all weather</button></Link>
            </div>

            
            
        </>
    )

}

export default SingleCityWeather;