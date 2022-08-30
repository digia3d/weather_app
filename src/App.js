import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Country from './components/pages/Country';
import WeatherHome from './components/pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route exact path="/" element={<WeatherHome />} />
          <Route exact path="/Country" element={<Country />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
