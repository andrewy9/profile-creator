import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProfileList } from '../../actions'
import { getProfiles } from '../../apis/apiController';
import LogIn from './LogIn'

function Nav({ dispatch, user, profile }) {
  useEffect(() => {
    user.name ?
      loadProfileList()
      : null
  }, [user.name, profile.profileName])

  const loadProfileList = () => {
    getProfiles(user.id)
      .then(details => {
        dispatch(updateProfileList(details))
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
                  <a className="navbar-link" onMouseOver={loadProfileList}>
                    My Profiles
                  </a>
                  <div className="navbar-dropdown">
                    {user.profileList.map(profile => {
                      return <div key={profile.id}>
                        <hr className="navbar-divider" />
                        <div className="navbar-item">
                          <Link to={`/finalView/${profile.profileName}`}>{profile.profileName}</Link>
                        </div>
                      </div>
                    })}
                  </div>
                </div>
                {/* <a className="navbar-item">Documentation</a>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span>Download</span>
                  </a>
                </span> */}
                <span className="navbar-item">
                  <LogIn />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user,
    profile: globalState.profile
  }
}

export default connect(mapStateToProps)(Nav)
