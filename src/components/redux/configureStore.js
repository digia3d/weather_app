import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './Weathers';

const rootReducer = combineReducers({ weathers: weatherReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
