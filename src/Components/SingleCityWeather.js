import {Link} from'react-router-dom';
import { useContext } from "react";
import { mySatelite } from "../App.js";

const SingleCityWeather = () =>{
    const weatherDeets = useContext(mySatelite);
    console.log(weatherDeets);
    return(
        <>
            <Link to='/'><button>Go back</button></Link>
            
        </>
    )

}

export default SingleCityWeather;