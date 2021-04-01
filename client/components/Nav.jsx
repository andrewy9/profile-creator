import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { getProfiles } from '../apis/apiController';

function Nav({ user, logout, responseGoogle }) {
  const [profiles, setProfiles] = useState([])
  const loadProfiles = () => {
    getProfiles(user.id)
      .then(details => {
        console.log(details)
        setProfiles(details)
      })
  }

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

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link" onMouseEnter={loadProfiles}>
                    My Profiles
                  </a>
                  <div className="navbar-dropdown">
                    {profiles.map(profile => {
                      return <div key={profile.id}>
                    <hr className="navbar-divider"/>
                    <div className="navbar-item">
                      <Link to={`/finalView/${profile.profileName}`}>{profile.profileName}</Link>
                    </div>
                    </div>
                    })}
                  </div>
                </div>
                
                <a className="navbar-item">Documentation</a>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span>Download</span>
                  </a>
                </span>
                {user.name ? <GoogleLogout
                  clientId="729329557892-e3l8r6ainb4abrevis8c7jhh3acklrf2.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logout} />
                  : <GoogleLogin
                    clientId='729329557892-e3l8r6ainb4abrevis8c7jhh3acklrf2.apps.googleusercontent.com'
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                  />}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  console.log(globalState.user)
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(Nav)
