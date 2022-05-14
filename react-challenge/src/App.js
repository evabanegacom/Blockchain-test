import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const key = process.env.REACT_APP_CHEC_PUBLIC_KEY


  const [weather, setWeather] = useState({});
  const query = `?q=lagos&appid=${key}`;
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect(() =>{
    fetch(baseUrl + query)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      });
  }, [])
  console.log(weather);
  return (
    <div className="App">
      <h1>Counter</h1>
      <p>count: {count} </p>
       <button onClick={increment}>
         +
       </button>
         <br />
       <button onClick={decrease}>
         -
       </button>
       <div>
         <h1>API area</h1>
         <p>I am using the Weather App API</p>
         <div>
           <p>City: {weather?.name}</p>
           <p>Location: longitude - {weather?.coord?.lon} latitude - {weather?.coord?.lat} </p>
           <p>Country: {weather?.sys?.country} </p>
           <p>Windspeed: {weather?.wind?.speed} Km/Hr</p>
         </div>
       </div>
    </div>
  );
}

export default App;
