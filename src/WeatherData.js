const forecastData = [
    {
      day: "Monday",
      conditions: "sunny",
      maxTemp: 38,
      wind: 15,
    },
    {
      day: "Tuesday",
      conditions: "stormy",
      maxTemp: 26,
      wind: 36,
    },
    {
      day: "Wednesday",
      conditions: "rainy",
      maxTemp: 25,
      wind: 25,
    },
    {
      day: "Thursday",
      conditions: "cloudy",
      maxTemp: 28,
      wind: 20,
    },
    {
      day: "Friday",
      conditions: "sunny",
      maxTemp: 35,
      wind: 16,
    },
  ];

export default function WeatherApp() {
    return (
      <div>
        <h1>Weekly Weather Forecast</h1>
        {forecastData.map(function(weather) {
          return (
            <div className= "dailyData">
              <h2>{weather.day}</h2>
              {weather.wind > 30 && <p className="highWind"> HIGH WIND WARNING</p>}
              {weather.maxTemp > 35 && <p className="highTemp"> HIGH HEAT WARNING</p>}
              <p>{weather.conditions === "stormy" ? "Thunderstorms 🌩️" : weather.conditions === "sunny" ? "Sunshine ☀️" : weather.conditions === "cloudy" ? "Overcast ☁️" : weather.conditions === "rainy" ? "Raining 🌧️" : ""}</p>
              <p>Max Temp: {weather.maxTemp}°C</p>
              <p>Wind Speed: {weather.wind}km/h</p>
            </div>
        )})}
      </div>
    )
}

