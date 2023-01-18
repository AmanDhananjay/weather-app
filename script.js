


// getWeatherData()
// function fetchWeather () {
//     navigator.geolocation.getCurrentPosition((success) => {
        
//         let {latitude, longitude } = success.coords;

//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

//         console.log(data)
//         displayWeather(data);
//         })

//     })
// }

let weather = {


 

  apiKey: "55cfe4a648881e17423f09b7db70c488",
 

  fetchWeather: function (lat,lon) {
    fetch(
     
    "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon="+ lon + "&appid=" +
    this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },


  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;

    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";

    document.querySelector(".description").innerText = description;

    document.querySelector(".temp").innerText = temp + "°C";

    document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
   
    document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
   
    document.querySelector(".weather").classList.remove("loading");

    document.body.style.backgroundImage =  "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector("#lat").value,document.querySelector("#lon").value);
  },
 
};


document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
.querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
  document.querySelector(".city").addEventListener("click", function () {
    weather.fetchWeather("22.103245","82.145585");
  });
  
  //weather.fetchWeather("44.34","10.99");
 weather.fetchWeather("22.103245","82.145585");

 navigator.geolocation.getCurrentPosition((success) => {
        
  let {lat,lon} = success.coords;
  console.log(lat, lon);
  weather.fetchWeather(lat,lon);
 })
