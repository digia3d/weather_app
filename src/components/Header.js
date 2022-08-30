import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link className="logo-link" to="/Home">
          <h2>
            <FaAngleLeft size={24} />
            Weather data
          </h2>
        </Link>
        <Link className="logo-link" to="/Country">Country</Link>
      </div>
      <div className="title">
        <h1>Weather data</h1>
      </div>
    </header>
  );
}

export default Header;
