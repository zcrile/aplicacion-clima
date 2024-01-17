import { useEffect, useState } from "react"

export const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '7470a3b02535b44fecf3e9bee4999bb1'
    const difKelvin = 273.15

    const [ciudad, setCiudad] = useState('Tokyo')
    const [dataClima, setDataClima] = useState(null)
    


    

    useEffect(()=> {
        
    const fetchClima = async () => {
        
        try{
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        }catch(error){
            console.error('Ocurrió el siguiente problema: ', error)
        }
    };
    fetchClima();
}, [ciudad]);

const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault()
    
}

  return (

    <div className="container">
        <h1>Aplicación del Clima</h1>
        <h2>Ingresa una ciudad</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={ciudad}
            onChange={handleCambioCiudad}
            />
            <button type="submit">Buscar</button>
        </form>  
        {
            dataClima && (
                <div className="cardContainer">
  <div className="card">
    <p className="city">{dataClima.name}</p>
    <p className="weather">{dataClima.weather?.[0]?.description}</p>
    
      <img
        
        src={`https://openweathermap.org/img/wn/${dataClima.weather?.[0]?.icon}@2x.png`}/>
    
    <p className="temp">{parseInt(dataClima?.main?.temp - difKelvin)}ºC</p>
    <div className="minmaxContainer">
      <div className="min">
        <p className="minHeading">Min</p>
        <p className="minTemp">{parseInt(dataClima?.main?.temp_min - difKelvin)}ºC</p>
      </div>
      <div className="max">
        <p className="maxHeading">Max</p>
        <p className="maxTemp">{parseInt(dataClima?.main?.temp_max - difKelvin)}ºC</p>
      </div>
    </div>
  </div>
</div>
            )
        }
    </div>
  )
}