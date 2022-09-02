import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../api';

const CITY_WEATHER = 'city_weather/weather/CITY_WEATHER';

const initialState = [];
export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case CITY_WEATHER:
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}

export const addCity = (payload) => ({
  type: CITY_WEATHER,
  payload,
});

/*
data.forEach((obj) => {
  const newObj = {
    lon: obj.lon,
    lat: obj.lat,
    main: obj.weather.main,
    icon: obj.weather.icon,
    temp: obj.main.temp,
    feels_like: obj.main.feels_like,
    temp_min: obj.main.temp_min,
    temp_max: obj.main.temp_max,
    pressure: obj.main.pressure,
    humidity: obj.main.humidity,
    speed: obj.wind.speed,
    deg: obj.wind.deg,
    gust: obj.wind.gust,
    all: obj.clouds.all,
    country: obj.sys.country,
    sunrise: obj.sys.sunrise,
    sunset: obj.sys.sunset,
    timezone: obj.timezone,
    id: obj.weather.Id,
    name: obj.name,
  };
  changed.push(newObj);
});
return changed;
}
*/



 export const getWeather = () => async (dispatch) => {
  await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => { dispatch(addCity(data.list)) });
};

/*
export { getWeather };
 export const getWeathers =  async (dispatch) => {
const response = await fetch(api)
const responsefetch = await response.json()
console.log(responsefetch)
return responsefetch;

 }
*/