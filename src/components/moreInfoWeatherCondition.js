/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const MoreWeatherCondition = () => {
  const weathers = useSelector((state) => state.weathers);
  const {day} = useParams();
  const {temp, feels_like, temp_min, temp_max, pressure, humidity} = weathers[parseInt(day)-1].main
  const {weather, icon, name } = weathers[parseInt(day)-1].weather[0];
  const {speed, deg, gust} = weathers[parseInt(day)-1].wind;
  const {all} = weathers[parseInt(day)-1].clouds;
  const {dt_txt} = weathers[parseInt(day)-1];       
 

  return (
    <section className="weather-details">
      <div className="description">
        <h3>{name}</h3>
        <div>{weather}</div>
        <div>{dt_txt}</div>
        <span>{temp}</span>
        <span>{icon}</span>
      </div>
      <div>
        <h3>Condition</h3>
        <p>{feels_like}</p>
        <p>{temp_min}</p>
        <p>{temp_max}</p>
        <p>{pressure}</p>
        <p>{humidity}</p>
        <p>{speed}</p>
        <p>{deg}</p>
        <p>{gust}</p>
        <p>{all}</p>
      </div>
      {/* <NavLink id="./pages/City.js">
        <FaAngleRight />
  </NavLink> */}

    </section>
  );
};
export default MoreWeatherCondition;
