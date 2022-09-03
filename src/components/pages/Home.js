import { React, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { getWeather } from '../redux/Weathers';
import SinglCityWeather from './City';

function Home() {
  const weathers = useSelector((state) => state.weathers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);
  return (
    <>
      <div className="info">Forecast for five days</div>
      <div className="weather-card">
        {weathers.map((weather, index) => (
          <SinglCityWeather
            key={uuidv4()}
            page={index + 1}
            id={weather.weather.id}
            weather={weather.weather[0].main}
            icon={weather.weather[0].icon}
            temp={weather.main.temp}
            feels_like={weather.main.feels_like}
            temp_min={weather.main.temp_min}
            temp_max={weather.main.temp_max}
            pressure={weather.main.pressure}
            humidity={weather.main.humidity}
            speed={weather.wind.speed}
            deg={weather.wind.deg}
            gust={weather.wind.gust}
            all={weather.clouds.all}
            date={weather.dt_txt}
            country=""
            sunrise=""
            sunset="{weather.sunset}"
            timezone="{weather.timezone}"
            name={weather.weather[0].description}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
