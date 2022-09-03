import weatherReducer from '../redux/Weathers';

test('Check if the API is pending to load dataa', () => {
  const state = weatherReducer({ weathers: [] }, { type: 'city_weather/weather/CITY_WEATHER/pending', meta: { requestId: 'b6eaae0ae9761279afa913bc4dd4311d', requestStatus: 'pending' } });
  expect(state).toEqual({ weathers: [] });
});
