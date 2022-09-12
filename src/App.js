import Form from './Components/Form.js';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function App() {

  // State
  const [city,setCity]=useState('');
  const [cityArray, setcityArray]=useState(['']);
  const [isMount, setIsMount]=useState(true);
  const [currentIndex, setCurrentIndex]=useState(0);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [weather, setCurrentWeather]=useState([]);
  const [allCities,setAllCities] = useState({});


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

              setAllCities({city:{temp:res.data.main.temp,desciption:res.data.weather[0].main}});

             
              console.log(allCities);


              
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

      const handleChange=(e)=>{
        console.log(e);
        console.log(e.target.options.selectedIndex)
        setCurrentIndex(e.target.options.selectedIndex-1)
      }

      useEffect(()=>{
        if(!isMount){
          setLat(cityArray[currentIndex].latitude)
          setLong(cityArray[currentIndex].longitude)
        }
      },[currentIndex])

  return (
    <>
 
      <Form getCity={getCitySearch}/>
      <form>
        <select onChange={handleChange}>
          <option>Chose City</option>

  
            {
              cityArray.map(item=>{
        
                  
                return (
                
                <option>${item.name}, ${item.state}, ${item.country}</option>
                )
            
            })
         

  
             
            }
  
           
          
        </select>
      </form>

      {
        lat && long?
          <>
          <p>{lat}</p>
          <p>{long}</p>
          </>
          :null
      }

      <div>

      </div>
        
        
   
    </>
  );
}

export default App;
