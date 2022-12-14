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


    const handleChangeCity=(e)=>{
        console.log(e);
        console.log(e.target.options.selectedIndex)
        props.getCurrentIndex(e.target.options.selectedIndex-1);

      }
  
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label className="src-only" for="cityQ"></label>
            <input onChange = {handleChange} id = "cityQ" type="text" placeholder="Search a City" value={citySearch} />
          
            {

            props.allCities.length>1?
            <select onChange={handleChangeCity}>
            <option>Chose City</option>

                {
                props.allCities.map((item,index)=>{
                    
                    return(
                    item.state?
                    <option key = {index}>{item.name}, {item.state}, {item.country}</option>:<option key = {index}>{item.name}, {item.country}
                    
                    </option>
                    
                    )
                    
                })
            }
                   
                </select>:null
            }       
            
        </form>
        </>
    );
}

export default Form;