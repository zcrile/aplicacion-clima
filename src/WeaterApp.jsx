import React, { useEffect, useState } from "react";

const Notification = ({ message, onClose, notificationStyle }) => (
  <div className="notification" style={notificationStyle}>
    <p>{message}</p>
  </div>
);

export const WeatherApp = () => {
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '7470a3b02535b44fecf3e9bee4999bb1';
  const difKelvin = 273.15;
  const velViento = 3.6;

  const [ciudad, setCiudad] = useState('Tokyo');
  const [dataClima, setDataClima] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState(null);

  useEffect(() => {
    const fetchClima = async () => {
      try {
        const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
        const data = await response.json();

        if (data.cod === "404") {
          showNotification("Datos no encontrados, ingresa otra ciudad");
          setDataClima(null); // Limpiar los datos en caso de error
        } else {
          setNotification(null);
          setDataClima(data);
        }
      } catch (error) {
        console.error('Ocurrió el siguiente problema: ', error);
        showNotification('Error al obtener datos climáticos');
      }
    };

    if (ciudad) {
      fetchClima();
    }
  }, [ciudad]);

  const handleCambioCiudad = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCiudad(searchQuery);
  };

  const showNotification = (message) => {
    setNotification(message);
    setNotificationStyle({
      backgroundColor: 'red',
      color: 'white',
      margin: '0.50rem',
      borderRadius: '1rem',
    });

    setTimeout(() => {
      setNotification(null);
    }, 10000);
  };

    return (
    <div className="container">
      <h1>Aplicación del Clima</h1>
      <h2>Ingresa una ciudad</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleCambioCiudad} />
        <button type="submit">Buscar</button>
      </form>
      {notification && (
        <Notification
          message={notification}
          notificationStyle={notificationStyle}
          onClose={() => setNotification(null)}
        />
      )}
      {dataClima !== null && (
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
                            <div className="humedad">
                            
                                <p><svg xmlSpace="preserve" viewBox="0 0 30 30" height="20px" width="30px" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" className="humiditysvg">  <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABiVBMVEUAAAAAAP9NerV/f39O
          e7ZQfLZVf6pRfbfL5fdRfbZIbbZmmcxols5nl85OebSPsteLrdVSfLZxl89ok9FqlM5ahsBdicNa
          hsFcicRhjcdWgbpahsFfi8ZbhsFijsmErOWLt+9xndZcicJahsFahsFdicN5n81xjcZqlNRpls1q
          lNBfn99pls9nkcxXgrpZgrtik81OebWNsdeMrtZOebRNerVZg7pwmMhNebRKdLRNerZNebHZ8v9o
          lM9jj8rV7v3W7v1ch7+Ktu6Lt/CEsep7p+Cz1PO+3fqJte5/q+V+quOUvvLY8f+TvfKpzvapzfaq
          z/aRvPGdxfSVv/LX8P/W8P+32fnK5vyMuPCmzPXW8P6ny/WWv/KOufGawvO22PjJ5vzB4PrU7v6i
          yPSz1fiYwfKOufDD4funzPXF4vvE4vuOuvHV7/7U7/7G4/uNufCx1Pew0/ev0veu0feQu/G01viP
          ufF/q+SCrud+quSItO2kyvWjyfVijslrltFmkcyEqtZgjMf///8NXQssAAAAPHRSTlMAAZgCW+EG
          y+jMBxRaRXHC2H8bX0ry/vrhyvnw0PDHR0Be/e/4/f4SDDNiEFVb0eI5iMHCho7NwI0YOBdy59Cm
          AAAAAWJLR0SCi7P/RAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cCEBITAJMBs+kAAAFb
          SURBVCjPY2CAAUYmZgY8gIWVBY8sGzsHJxc2CW4eXiDJx28jIAjiCgnzgoV5ebiBpIiomK2duISk
          lL2Ng6O0jIwsmCsnIW5nKyYqwiDv5AwELq5uNjY27h6enh5grpcLiHKSZ1BwBgNvH6C0j68zKlCA
          SfvZgIA/LukAsHQAVDgwCE06OAQoGxoMlQ4Lj0CVdo6MsomKhrJjfGwi0aSdY+NiYcx4G5sEdGkk
          kGhjk4RHOjnEJgWPtLNvKprL07CpgktHpEfgk/a3ycAnnWmThRDMxpDOscmFi6Xl5aNLF+QUwqWL
          bIoxogQBSpJskkpwS5cC4yYFp3RZElA6qQwh7VFeAWZXVFYByWpwxNcAueUeQGlFJWUZCZXauloV
          CRllVdt6NbB0QyOIq6TIoK4BSrWaWpogSltHVw8srW8A4mqoY6R6QyOgrLEJztxiamZuZsGGOztZ
          WlnD2QBCYbJl9Cx9XAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xNlQxODoxOTowMCswMDow
          MG/wqfUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTZUMTg6MTk6MDArMDA6MDAerRFJAAAA
          KHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTE2VDE4OjE5OjAwKzAwOjAwSbgwlgAAAABJRU5ErkJggg==" y="0" x="0" height="30" width="30" id="image0"></image>
          </svg> Humedad {dataClima?.main?.humidity}%</p>
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