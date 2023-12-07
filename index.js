const APIKEY = "3153d865fdd2831fbb1f1f25360d891c";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const CITY = document.querySelector('.search input');
const WEATHERICON = document.querySelector(".weather-icon");
let searchBtn = document.querySelector('.search button');
let body = document.getElementsByTagName('body')[0];

async function checkWeather(city){
    const response = await fetch(APIURL +  city + `&appid=${APIKEY}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        let weatherMain = data.weather[0].main;

        switch (weatherMain) {
            case "Clouds":
                WEATHERICON.src = "./images/clouds.png";
                body.style.backgroundImage = 'url(./images/beautiful-clouds.jpg)';
                break;
            case "Clear":
                WEATHERICON.src = "./images/clear.png";
                body.style.backgroundImage = 'url(./images/clear-bg.jpg)';
                break;
            case "Rain":
                WEATHERICON.src = "./images/rain.png";
                body.style.backgroundImage = 'url(./images/rain-bg.jpg)';
                break;
            case "Drizzle":
                WEATHERICON.src = "./images/drizzle.png";
                body.style.backgroundImage = 'url(./images/drizzle-bg.jpg)';
                break;
            case "Mist":
                WEATHERICON.src = "./images/mist.png";
                body.style.backgroundImage = 'url(./images/mist-bg.jpg)';
                break;
            default:
                WEATHERICON.src = "./images/snow.png";
                break;
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(CITY.value)
});



