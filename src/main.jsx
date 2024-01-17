import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/weatherStyles.css'
import { WeatherApp } from './WeaterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp/>
  </React.StrictMode>,
)
