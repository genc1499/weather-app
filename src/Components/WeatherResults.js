import {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import SingleCityWeather from './SingleCityWeather';
import cloudy from '../assets/cloudy.jpg';
import rain from '../assets/rain.jpg';
import thunder from '../assets/thunderstorm.jpg';
import clear from '../assets/clear.jpg';
import snow from '../assets/snow.jpg';
import drizzle from '../assets/drizzle.jpg';
import fog from '../assets/fog.jpg';
const WeatherResults = (props) =>{
    const [convertTemp, setConvertTemp]=useState("")


    // let tempString = props.temp;
    // tempString-=273.15;
    // tempString = tempString.toString();

    // console.log(tempString);
    // setConvertTemp(tempString);
 
   
   
  

    
    return (
        <>
        <Routes>
            <Route path = {`/${props.selectedCity}`} element = {<SingleCityWeather/>}/>
        </Routes>

        <section>
            <main>
                {
                props.weatherDescription==="Clouds"?
                <Link to = {`/${props.selectedCity}`}>
                <div style={{ backgroundImage:`url(${cloudy})` }}className='weather-cards'>
                <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                <h3>{Math.round(props.temp-273.15)}°C</h3>
                 </div>
                </Link>:

                props.weatherDescription==="Rain"?
                <Link to = {`/${props.selectedCity}`}><div style={{ backgroundImage:`url(${rain})` }}className='weather-cards'>
                <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                <h3>°{Math.round(props.temp-273.15)}°C</h3> </div>
                </Link>:

                props.weatherDescription==="Thunderstorm"?
                <Link to = {`/${props.selectedCity}`}><div style={{ backgroundImage:`url(${thunder})` }}className='weather-cards'>
                <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                <h3>°{Math.round(props.temp-273.15)}°C</h3> </div>
                </Link>:
                
                props.weatherDescription==="Clear"?
                <Link to = {`/${props.selectedCity}`}><div style={{ backgroundImage:`url(${clear})` }}className='weather-cards'>
                <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                <h3>°{Math.round(props.temp-273.15)} C</h3> </div>
                </Link>:
                
                 props.weatherDescription==="Snow"?
                 <Link to = {`/${props.selectedCity}`}><div style={{ backgroundImage:`url(${snow})` }}className='weather-cards'>
                 <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                 <h3>°{Math.round(props.temp-273.15)} C</h3> </div>
                 </Link>:

                props.weatherDescription==="Drizzle"?
                <Link to = {`/${props.selectedCity}`}><div style={{ backgroundImage:`url(${drizzle})` }}className='weather-cards'>
                <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                <h3>°{Math.round(props.temp-273.15)} C</h3> </div>
                </Link>:

                props.weatherDescription==="Fog"?
                <Link to = {`/${props.selectedCity}`}><div style={{ backgroundImage:`url(${fog})` }}className='weather-cards'>
                <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                <h3>°{Math.round(props.temp-273.15)} C</h3> </div>
                </Link>:null

                }
            </main>
        </section>
        </>
    )

}

export default WeatherResults;