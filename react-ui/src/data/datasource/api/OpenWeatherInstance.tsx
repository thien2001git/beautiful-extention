import axios from 'axios'

const OpenWeatherInstance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/geo/1.0/",
    headers:{
        "Content-Type" : "application/json",
    }
});

export default OpenWeatherInstance