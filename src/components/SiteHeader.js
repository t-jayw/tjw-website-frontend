import React from 'react';
import { Link } from 'react-router-dom';

function SiteHeader() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Tyler Jay Wood</h1>
          </Link>
          <p>Making things on/with the internet</p> 
        </div>
       
      </div>
    </header>
  );
}

export default SiteHeader;
