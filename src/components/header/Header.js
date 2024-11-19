import React from "react";

import "./Header.css";

import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
        <Link to="/movies/popular"><span>Popular</span></Link>
        <Link to="/movies/top_rated"><span>Top Rated</span></Link>
        <Link to="/movies/upcoming"><span>Upcoming</span></Link>
      </div>
    </div>
  );
};

export default Header;
