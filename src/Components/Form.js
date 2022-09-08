import {useState,useEffect} from 'react';


const Form = (props)=>{

    // state for city search
    const [citySearch,setCitySearch]=useState('');

    // get user's seach
    const handleChange=(e)=>{
        setCitySearch(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
        
        props.getCity(citySearch);
    }
  
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label className="src-only" for="cityQ"></label>
            <input onChange = {handleChange} id = "cityQ" type="text" placeholder="Search a City" value={citySearch} />
        </form>
        </>
    );
}

export default Form;