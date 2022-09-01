/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import MoreWeatherCondition from '../moreInfoWeatherCondition';

const SinglCityWeather = (props) => {
  const {
    lon,
    lat,
    weather,
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
  } = props;

  return (
    <section className="location/box">
      <div className="more-link">
        <Link
          to={
            `/more/${weather.weather.id}`
          }
          state={{
            lon,
            lat,
            weather,
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
          }}
        >
          <button className="button" type="button" id={id}>
            <FaRegArrowAltCircleRight />
          </button>
        </Link>
      </div>
      <div className="location">
        <h2>Belgrade</h2>
      </div>
      <MoreWeatherCondition />
    </section>
  );
};

SinglCityWeather.propTypes = {
  lon: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  feels_like: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  deg: PropTypes.number.isRequired,
  gust: PropTypes.number.isRequired,
  all: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
  timezone: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default SinglCityWeather;
