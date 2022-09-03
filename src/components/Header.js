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
        <Link className="logo-link" to="/Home">
          <FaAngleLeft size={24} />
        </Link>
        <div className="date">
          {dateBuilder(new Date())}
        </div>
      </header>
      <section className="section">
        <div className="conttitl">
          <p className="title">
            Weather App
          </p>
          <h1 className="titleM">
            London
          </h1>
        </div>
      </section>
    </main>
  );
}

export default Header;
