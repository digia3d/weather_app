import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import WeatherHome from './components/pages/Home';
import MoreWeatherCondition from './components/moreInfoWeatherCondition';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<WeatherHome />} />
        <Route path="/MoreWeatherCondition" element={<MoreWeatherCondition />} />
      </Routes>
    </Router>
  );
}

export default App;
