import axios from 'axios';
const API_KEY = 'f6d95f877d642402f183fe4c848623cb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}