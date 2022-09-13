import {useState,useEffect} from 'react';


const Form = (props)=>{

    // state for city search
    const [citySearch,setCitySearch]=useState('');

    console.log(props.allCities);

    // get user's seach
    const handleChange=(e)=>{
        setCitySearch(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.getCity(citySearch);
    }
  
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label className="src-only" for="cityQ"></label>
            <input onChange = {handleChange} id = "cityQ" type="text" placeholder="Search a City" value={citySearch} />
          
            {

            props.allCities.length>1?
            <select onChange={handleChange}>
            <option>Chose City</option>

                {
                props.allCities.map((item,index)=>{
                    
                    return(<option key = {index}>{item.name}, {item.state}, {item.country}</option>)
                    
                })
            }
                   
                </select>:null
            }       
            
        </form>
        </>
    );
}

export default Form;