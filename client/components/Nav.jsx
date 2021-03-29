import React from 'react'
import {Link} from 'react-router-dom'
import {GoogleLogout } from 'react-google-login';

export default function Nav ({logout}) {
  return (
    <div className="hero-head">
      <div className='box'>
          <nav className="navbar has-shadow is-fixed-top">
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
        </div>
  )
}