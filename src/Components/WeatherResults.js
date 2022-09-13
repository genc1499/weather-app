import {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import SingleCityWeather from './SingleCityWeather';
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
                <Link to = {`/${props.selectedCity}`}><div className='weather-cards'>
                <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                <h3>°{Math.round(props.temp-273.15)} C</h3>
                
                </div></Link>

                
            </main>
        </section>
        </>
    )

}

export default WeatherResults;