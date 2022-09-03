/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const SinglCityWeather = (prop) => {
  const {
    weather,
    temp,
    id,
    date,
    page,
  } = prop;

  return (
    <section className="location-box">
      <div className="more-link">
        <Link
          to={
            `/weather/${page}`
          }
        >
          <button className="button" type="button" id={id}>
            <FaRegArrowAltCircleRight />
          </button>
        </Link>
      </div>
      <div className="loc">
        <div className="location">
          <span>Date  Time</span>
          <div className="time">{date}</div>
        </div>
        <div className="condition">
          <span>
            Weather
          </span>
          {weather}
        </div>
        <div className="temp">
          <span>Temp</span>
          {temp}
          &#8451;
        </div>
      </div>
    </section>
  );
};

export default SinglCityWeather;
