/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MoreWeatherCondition = () => {
  const weathers = useSelector((state) => state.weathers);
  const { day } = useParams();
  const {
    temp, feels_like, temp_min, temp_max, pressure, humidity,
  } = weathers[parseInt((day - 1), 10)].main;
  const { name } = weathers[parseInt((day - 1), 10)].weather[0];
  const { speed, deg, gust } = weathers[parseInt((day - 1), 10)].wind;
  const { all } = weathers[parseInt((day - 1), 10)].clouds;
  const { dt_txt } = weathers[parseInt((day - 1), 10)];

  return (
    <section className="weather-details">
      <div className="description">
        <h3>
          More info
          {name}
        </h3>
        <div className="rain">
          <div className="datemo">
            <span>
              Date and time
            </span>
            {dt_txt}
          </div>
          <div className="infote">
            <span>
              Temp
            </span>
            {temp}
            &#8451;
          </div>
          <span className="con">Condition</span>
          <div className="feels_like">
            <span>Feels like</span>
            {feels_like}
            &#8451;
          </div>
          <div className="temp_min">
            <span>Min temp</span>
            {temp_min}
            &#8451;
          </div>
          <div className="temp_max">
            <span>Max temp</span>
            {temp_max}
            &#8451;
          </div>
          <div className="pressure">
            <span>Pressure</span>
            {pressure}
            Hpa
          </div>
          <div className="humidity">
            <span>Humidity</span>
            {humidity}
            %
          </div>
          <div className="speed">
            <span>Wind speed</span>
            {speed}
            km/h
          </div>
          <div className="deg">
            <span>Deg</span>
            {deg}
          </div>
          <div className="all">
            <span>All</span>
            {all}
            %
          </div>
          <div className="gust">
            <span>
              Gusts of wind
            </span>
            {gust}
            km/h
          </div>
        </div>
      </div>
    </section>
  );
};
export default MoreWeatherCondition;
