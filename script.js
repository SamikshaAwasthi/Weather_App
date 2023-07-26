const inputBox = document.querySelector(".input-box");
const searchbtn = document.getElementById("search-btn");
const weatherimg = document.querySelector(".weather_img");
const temprature = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity1 = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const text = document.querySelector(".text");

async function checkWeather(city) {
  const api_key = "dca292b5d3486c13a28b666ec049e18d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  
  if (weather_data.cod == "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-body").style.display = "none";
  }
 
  
  temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°c`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity1.innerHTML = `${weather_data.main.humidity}% `;
  wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

  if (weather_data.weather[0].main == "Clouds") {
    weatherimg.src = "images/clouds.png";
  } else if (weather_data.weather[0].main == "Clear") {
    weatherimg.src = "images/clear.png";
  } else if (weather_data.weather[0].main == " Rain ") {
    weatherimg.src = "images/rain.png";
  } else if (weather_data.weather[0].main == " Drizzle") {
    weatherimg.src = "images/drizzle.png";
  } else if (weather_data.weather[0].main == "Mist") {
    weatherimg.src = "images/mist.png";
  } else {
    console.log("this is wrong image");
  }
  document.querySelector(".weather-body").style.display = "block";
  document.querySelector(".error").style.display = "none";
}



searchbtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
