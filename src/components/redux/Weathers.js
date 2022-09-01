import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../api';

const CITY_WEATHER = 'city_weather/weather/CITY_WEATHER';

const initialState = [];

export default function weather(state = initialState, action) {
  switch (action.type) {
    case `${CITY_WEATHER}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

export const addCity = (payload) => ({
  type: CITY_WEATHER,
  payload,
});

const duplicateData = (data) => {
  const changed = [];

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
};

const getWeather = createAsyncThunk(CITY_WEATHER, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const altered = duplicateData(data);
  return altered;
});

export { getWeather };
