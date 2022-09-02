import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/action/action';

import SinglCityWeather from './City';

function Home() {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  useEffect(() => {
    if (weatherLoaded) return;
    dispatch(fetchWeather());
    setWeatherLoaded(true);
  }, []);

  return (
    <div className="weather-card">
      {weather?.map((city) => (
        <SinglCityWeather
          key={city.id}
          id={city.weather.id}
          weather={city.main}
          icon={city.icon}
          temp={city.main.temp}
          feels_like={city.feels_like}
          temp_min={city.temp_min}
          temp_max={city.temp_max}
          pressure={city.pressure}
          humidity={city.humidity}
          speed={city.speed}
          deg={city.deg}
          gust={city.gust}
          all={city.all}
          country={city.country}
          sunrise={city.sunrise}
          sunset={city.sunset}
          timezone={city.timezone}
          name={city.name}
        />
      ))}
    </div>
  );
}
export default Home;
