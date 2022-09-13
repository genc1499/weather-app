import Form from './Components/Form.js';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import WeatherResults from './Components/WeatherResults.js';
import {Link, Routes, Route} from 'react-router-dom';

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

        
             setCurrentWeather(res.data.main.temp)
             setDescription(res.data.weather[0].main)
              console.log('this weahter', res.data)

    
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
    },[long],[lat])

      // Make API call to search city and get LAT/LONG


  

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
      <Routes>
      <Route path ='/' element = {<Form getCurrentIndex={getCityIndex} getCity={getCitySearch} allCities={cityArray}/>}/>
      </Routes>
      {
      weather?
      
        <WeatherResults temp={weather} weatherDescription={description} selectedCity={displayCity}/>:null

      }

    </>
  );
}

export default App;
