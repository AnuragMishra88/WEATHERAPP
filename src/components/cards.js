import React from "react";
// import sunweather from "./weathersun.png";
import location from "./location.png";
import sunrise from "./sunrise.png";
import sunset from "./sunset.png";
import windspeed from "./windspeed.png";
import moon from "./moon.png";
import sun from "./sun.png"



function Cards({weather,mode,toggle,searching,input,setinput}){
    if (!weather || !weather.main) {
    return <p>Loading...</p>;
  }
    return (
        <>
        <nav className="navbar">
              <div className="navbar-container">
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="search-bar"
                  value={input} // controlled input
            onChange={(e) => setinput(e.target.value)}
                />
                <button className="search-btn" onClick={searching}>Search</button>
        
                <label >
                  <button onClick={toggle} className="search-btn2"><img  id="abc" src= {mode==="dark"?moon:sun}alt="" height={"40px"}width={"40px"}/></button>
                </label>
              </div>
            </nav>



        <div className="mainclass">
            <div className="card1">
                <p style={{textAlign:"center",fontSize:"25px",textDecoration:"underline"}}>WEATHER APP</p>
            
                <p style={{fontSize:"30px",textAlign:"center",textDecoration:"underline"}}>CURRENT WEATHER</p>
                <br></br>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="sunpic" height={"160px"} style={{marginLeft:"50px"}}></img>
                
                    <span style={{fontSize:"60px", marginLeft:"60px"}}>{Math.round(weather.main.temp-273.15)}°C
                    
                    <p style={{textAlign:"center",fontSize:"22px"}}>{weather.weather[0].description}</p>
                    </span>
                    
                <p style={{textAlign:"center"}}><img src={location} alt="icon" height="40px"></img>
                <span style={{fontSize:"30px", marginLeft:"20px"}}>{weather.name}</span>
                </p>
                <hr></hr>
                <p style={{display:"flex",justifyContent:"space-around"}}>
                    <p>Wind Speed <br /> <img src={windspeed} alt="img" height="40px"></img><br />{weather.wind.speed}km/hr</p>
                    <p>Sunrise <br /> <img src={sunrise} alt="img" height="40px"></img> <br />{new Date(weather.sys.sunrise*1000).toLocaleTimeString()}</p>
                    <p>Sunset <br /> <img src={sunset} alt="img" height="40px"></img> <br />{new Date(weather.sys.sunset*1000).toLocaleTimeString()}</p>
                </p>

              
            </div>
           

        </div>
        </>

    );
}
export default Cards;
