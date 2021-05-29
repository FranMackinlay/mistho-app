import React from 'react';
import './NavbarComponent.css';

export default function NavbarComponent() {
  return (
    <div className="navbar-container">
      <header className="navbar fm-df fm-jucst fm-ml-2 fm-mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Economist_Logo.svg/1200px-The_Economist_Logo.svg.png" alt="" />
          <div className="navbar-items fm-df fm-aliic fm-w100 fm-mx-2">
            <div className="fm-df fm-aliic fm-w100 fm-h100">
              <div className="navbar-menu navbar-item fm-df fm-aliic fm-w100 fm-mx-2">
                <i className="fa fa-bars fm-mr-1"></i>
                <span>Menu</span>
              </div>
              <div className="navbar-weekly-edition navbar-item fm-df fm-aliic fm-w100 fm-mx-2">
                Weekly Edition
              </div>
              <div className="navbar-search navbar-item fm-df fm-aliic fm-w100 fm-mx-2">
                <i className="fa fa-search"></i>
                <span className="fm-mx-1">Search</span>
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
            <div className="navbar-login fm-df fm-aliic fm-h100">
              <button className="btn btn-primary subscribe">Subscribe</button>
              <span className="login-boder fm-df fm-aliic">Login</span>
            </div>
          </div>
      </header>
    </div>
  )
}
