import { useEffect, useState } from "react"

export const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '7470a3b02535b44fecf3e9bee4999bb1'
    const difKelvin = 273.15
    const velViento = 3.6;

    const [ciudad, setCiudad] = useState('Tokyo')
    const [dataClima, setDataClima] = useState(null)





    useEffect(() => {

        const fetchClima = async () => {

            try {
                const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
                const data = await response.json()
                setDataClima(data)
            } catch (error) {
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
                            <img src={`https://openweathermap.org/img/wn/${dataClima.weather?.[0]?.icon}@2x.png`} />
                            <div className="viento">
                            
                            <p><svg className="airsvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="px" y="0px" width="20px" height="20px" viewBox="0 0 30 30" xmlSpace="preserve">  <image id="image0" width="30" height="30" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABaFBMVEUAAAAA//8ilfIhlfMg
            lvIglfMglvIeku8cjf8glvMhlfIflvMhlfIhlvIglvMhl/MglvIglfIglPEfmfIhlfIglvQfn/8g
            lfIglvIhlfMglfIglvMhl/AhlfIcm/AAf/8qlOkglPYglvIZmf8zmf8hlfIglfIXi+cilPMhlvMg
            lfQhlvMglvIhlfIgl/MglvMhlvMhlfMhlvIfl+8hlvMhlfMglvMglvI/f/8hlvMilvMelvAglfIg
            lvMhlvIglPIglvIhlfIkkfUglfMglfMhlvMhlvMilvMjlfEglvMhlfIhlfMglfIflvEnnOshlvIf
            lPEflfIek/QglvIglvMhlfIime4jlPAglvMglvEhlvMhl/MglfMglfMhlvIak/Edk/UhlvIglfMg
            l/IglvIglfIilPIhlvMhlfMhk/Eqqv8glvIglfMcl/UhlfMhlvIhlvMhlfIglfIhlfIgl/QflPQh
            lvP///+FIn/GAAAAdnRSTlMAAVKu1MmNIQmy91ig/Z5s0fo3KP5dCL27Lvm0NvwSAgwf+woFv7oL
            Q0RGa9L1Vtndx4sgme3FZgTIFiI/hvZld3sch8Tv7kI683nV6DgN4GBQMsycjw8k6nWqRW3cUxMa
            5dpnfLU87N8mBrxXG5jnibjLoi8YaHuXCQAAAAFiS0dEd0Zk+dcAAAAJcEhZcwAACxMAAAsTAQCa
            nBgAAAAHdElNRQfnAhEIBBbLW8PtAAABJ0lEQVQoz62RZ1fCMBSG46atomBR1IJ7g+KotKKgxYl7
            4Z6493x/v6T0QKMtn/p8ec/Nk5Pc5BLiHCWlZeUVlVU21sWBwgvWuho1bqG2Dh6vla0X4ctGQyP8
            VrqpuUVPCQGXlQ+26tEGtBfpX0JHp73t6kYPs9Db159nYDAEj8RoNxjCQ+xxvuFIgZHRMcemQMi4
            iP+I8kRU0TUHG9RJqpWYFVPTcahKsc/jkSAzfgNuVvvjk5gj84W7FhZZvYRl4o0apFawGmT0GsKm
            an0DmzS31O3cQgo75t27SNLYQyRNc/8AhzkROzrOPjCEE1poMk7Pzi8Sl7gyxp5B/Fq4Aa//A7m9
            y7V6/2Ac+/hEy8CzUb68ysDbezp/rZL5+Pz6NvWh/TgwzV+1HV523WQ81AAAACV0RVh0ZGF0ZTpj
            cmVhdGUAMjAyMy0wMi0xN1QwODowNDoyMiswMDowML1dmzYAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
            MjMtMDItMTdUMDg6MDQ6MjIrMDA6MDDMACOKAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
            LTE3VDA4OjA0OjIyKzAwOjAwmxUCVQAAAABJRU5ErkJggg=="></image>
                            </svg> Wind speed<br/> {parseInt(dataClima?.wind?.speed * velViento)} Km/h</p>
                            </div>
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