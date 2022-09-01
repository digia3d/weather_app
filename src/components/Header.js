import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const dateBuilder = (d) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

function Header() {
  return (
    <main>
      <header className="header">
        <div className="logo">
          <Link className="logo-link" to="/Home">
            <h2>
              <FaAngleLeft size={24} />
              Back
            </h2>
          </Link>
          <Link className="logo-link" to="/City">City</Link>
        </div>
        <div className="container">
          <div className="title">
            <h1>Weather App</h1>
          </div>
          <div className="date">
            {dateBuilder(new Date())}
          </div>
        </div>
      </header>
    </main>
  );
}

export default Header;
