import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import MoreWeatherCondition from './components/moreInfoWeatherCondition';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/Home" index element={<Home />} />
        <Route exact path="/" index element={<Home />} />
        <Route path="/weather/:day" element={<MoreWeatherCondition />} />
      </Routes>
    </Router>
  );
}

export default App;
