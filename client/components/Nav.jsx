import React from 'react'
import {Link} from 'react-router-dom'
import {GoogleLogout } from 'react-google-login';

export default function Nav ({logout}) {
  return (
    <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link to='/' className="navbar-item">
                  <p>PROFILE CREATOR</p>
                </Link>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <Link to='/finalView' className="navbar-item is-active">My Profliles</Link>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a className="button is-primary is-inverted">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                  <GoogleLogout
                    clientId="729329557892-e3l8r6ainb4abrevis8c7jhh3acklrf2.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout} />
                </div>
              </div>
            </div>
          </nav>
        </div>
  )
}