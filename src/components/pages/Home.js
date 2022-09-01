import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWeather } from '../redux/Weathers';
import SinglCityWeather from './City';

function WeatherHome() {
  const dispatch = useDispatch();
  const weathers = useSelector((state) => state.weather);
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <>
      <div className="weather-card">
        {weathers.map((weather) => (
          <SinglCityWeather
            key={weather.id}
            id={weather.weather.id}
            weather={weather.main}
            icon={weather.icon}
            temp={weather.main.temp}
            feels_like={weather.feels_like}
            temp_min={weather.temp_min}
            temp_max={weather.temp_max}
            pressure={weather.pressure}
            humidity={weather.humidity}
            speed={weather.speed}
            deg={weather.deg}
            gust={weather.gust}
            all={weather.all}
            country={weather.country}
            sunrise={weather.sunrise}
            sunset={weather.sunset}
            timezone={weather.timezone}
            name={weather.name}
          />
        ))}
      </div>
    </>
  );
}

export default WeatherHome;
