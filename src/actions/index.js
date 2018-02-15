import Axios from 'axios'

const WEATHER_API_KEY = '24bbc76ee138a4643d4ac3efc02cf7c6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fi`;
    const request = Axios.get(url);

    console.log("Request: ", request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}