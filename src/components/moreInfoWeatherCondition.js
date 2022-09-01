/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';

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
  const props = weather.find((item) => item.id === props.weather.id);

  return (
    <section className="weather-details">
      <div className="description">
        <h3>{name}</h3>
        
      </div>

    </section>
  );
};
export default MoreWeatherCondition;
