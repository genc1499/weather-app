import Form from './Components/Form.js';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  // State
  const [city,setCity]=useState('');
  const [isMount, setIsMount]=useState(true);


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
        console.log(res);
      })
      .catch((error) => {
         console.error('Error:', error);
      });
    }
  },[city])



  // const [coordinates, setCoordinates]=useState([]);
       {/* Make axios call to get LAT and LONG coords. */}
      //  axios({  
      //   url:`https://api.openweathermap.org/data/2.5/weather?`,
      //   params:{
      //       appid:`db10baac2dfd6e4c95277576b3941672`,
      //       lat:,
      //       long:
      //   }
      // }).then((res)=>{
      //   console.log(res);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });

      // Make API call to search city and get LAT/LONG



  

      const getCitySearch=(city)=>{
       
        setCity(city);
      }


  return (
    <>
 
      <Form getCity={getCitySearch}/>
    </>
  );
}

export default App;
