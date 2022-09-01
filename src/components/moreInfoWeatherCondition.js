/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';

import { FaAngleRight } from 'react-icons/fa';

const MoreWeatherCondition = () => {
  const weather = useSelector((state) => state.weather.MoreWeatherCondition);
  const location = useLocation();
  const {
    lon,
    lat,
    icon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    deg,
    gust,
    all,
    country,
    sunrise,
    sunset,
    timezone,
    id,
    name,
  } = location.state;
  const prop = weather.find((item) => item.id === prop.id);

  return (
    <section className="weather-details">
      <div className="description">
        <h3>{name}</h3>
        <span>{temp}</span>
        <span>{icon}</span>
      </div>
      <div>
        <h3>Condition</h3>
        <p>{feels_like}</p>
        <p>{temp_min}</p>
        <p>{temp_max}</p>
        <p>{lat}</p>
        <p>{lon}</p>
        <p>{pressure}</p>
        <p>{humidity}</p>
        <p>{speed}</p>
        <p>{deg}</p>
        <p>{gust}</p>
        <p>{all}</p>
        <p>{country}</p>
        <p>{sunrise}</p>
        <p>{sunset}</p>
        <p>{timezone}</p>
        <p>{id}</p>
      </div>
      <NavLink id="./pages/City.js">
        <FaAngleRight />
      </NavLink>

    </section>
  );
};
export default MoreWeatherCondition;
