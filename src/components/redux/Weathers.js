import API_URL from '../api';

const CITY_WEATHER = 'city_weather/weather/CITY_WEATHER';

const initialState = [];
export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case CITY_WEATHER:
      return action.payload;
    default:
      return state;
  }
}

export const addCity = (payload) => ({
  type: CITY_WEATHER,
  payload,
});

export const getWeather = () => async (dispatch) => {
  await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => { dispatch(addCity(data.list)); });
};
