import Form from './Components/Form.js';
import './App.css';
import {useState,useEffect, createContext} from 'react';
import axios from 'axios';
import WeatherResults from './Components/WeatherResults.js';
import SingleCityWeather from './Components/SingleCityWeather.js';
import {Link, Routes, Route} from 'react-router-dom';

const mySatelite = createContext();

// export context so other components can pick it up
export {mySatelite};

function App() {

  // State
  const [city,setCity]=useState('');
  const [displayCity,setDisplay]=useState('');
  const [cityArray, setcityArray]=useState(['']);
  const [isMount, setIsMount]=useState(true);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [weather, setCurrentWeather]=useState("");
  const [description,setDescription] = useState("");
  const [allWeather,setAllWeather]=useState({});
  const [allLatLong, setAllLatLong] = useState([]);



  useEffect(()=>{
    setIsMount(false);
  },[])

  useEffect(()=>{
    if(!isMount){
      axios({
        url:`https://api.api-ninjas.com/v1/geocoding`,

        headers:{'X-Api-Key': '4vZq8ZxPd3d7SXMgDBFZIg==3MtQlSD0z6bEtQrh'},
        params:{
          city:city
        }
      })
      .then((res)=>{
        console.log(res.data);
        setcityArray(res.data);
      })
      .catch((error) => {
         console.error('Error:', error);
      });
    }
  },[city])

  // 
       {/* Make axios call to get LAT and LONG coords. */}
       useEffect(()=>{
         if(!isMount)
         {
           console.log("start")
            axios({  
              url:`https://api.openweathermap.org/data/2.5/weather`,
              params:{
                  appid:`db10baac2dfd6e4c95277576b3941672`,
                  lat:lat,
                  lon:long
              }
            }).then((res)=>{
              console.log(res.data);
              console.log('This weather', res.data.main.temp);
              console.log('This weather', res.data.weather[0].main);

              setAllWeather(res.data);
              setCurrentWeather(res.data.main.temp)
              setDescription(res.data.weather[0].main)
              console.log('this weahter', res.data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
    },[long],[lat])

      const getCitySearch=(city)=>{
        setCity(city);
      }


      const getCityIndex = (index) =>{
        if(!isMount){
          setLat(cityArray[index].latitude)
          setLong(cityArray[index].longitude)
          setDisplay(city);
        }
      }
    

  return (
    <>
      <mySatelite.Provider value={allWeather}>
        <Routes>
          <Route path ='/' element = {<><Form getCurrentIndex={getCityIndex} getCity={getCitySearch} allCities={cityArray}/> 
          {
            weather? 
              <WeatherResults temp={weather} weatherDescription={description} selectedCity={displayCity}/>:null
          }
          </>}/>
        
          <Route path = "/weather" element = {<SingleCityWeather/>}/>
        </Routes>
      </mySatelite.Provider>
    </>
  );
}

export default App;
