const WeatherResults = (props) =>{
    
    return (
        <>
        <section>
            <main>
                <div className='weather-cards'>
                    <h2>{props.selectedCity[0].toUpperCase()+props.selectedCity.split("").slice(1).join("").toLowerCase()}</h2>
                    <h3>°{Math.round(props.temp-273.15)} C</h3>
                </div>
            </main>
        </section>
        </>
    )

}

export default WeatherResults