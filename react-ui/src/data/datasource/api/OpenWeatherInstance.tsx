import axios from 'axios'

export const OpenWeatherInstance_1_0 = axios.create({
    baseURL: "https://api.openweathermap.org/geo/1.0",
    headers:{
        "Content-Type" : "application/json",
    }
});

export const OpenWeatherInstance_2_5 = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    headers:{
        "Content-Type" : "application/json",
    }
});