// import logo from './logo.svg';
// import './App.css';
import Cards from './components/cards';

import { useEffect, useState } from 'react';

function App() {
  const[mode,toggleMode]=useState("light");
  const[weather,setweather]=useState(null);
  const[input,setinput]=useState("delhi");

  const changeMode=()=>{
    toggleMode(mode==="light"?"dark":"light");
  };

  useEffect(()=>{
    document.body.style.backgroundColor = mode === "dark" ? "gray" : "black";},[mode]
  );

  
  const fetchWeather = async (location) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8758c40d255abb30914ad8e501f6b890`
      );
      const data = await res.json();
      // console.log("API data:", data);   
      setweather(data);
    } catch (err) {
      console.log("Error fetching weather:", err);
    }
  };



useEffect(() => {
    fetchWeather(input); // fetch default weather on mount
  },[]);

  const searchFor = () => {
  if (input.trim() !== "") {  // check if input is not empty
    fetchWeather(input.trim());
  } else {
    alert("Please enter a city name");
  }
};

  


  return (
    <div className="App">
      
      <Cards weather={weather} mode={mode} toggle={changeMode} searching={searchFor} input={input}
        setinput={setinput}></Cards>
      
    </div>
  );
}

export default App;
