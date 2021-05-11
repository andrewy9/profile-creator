import React from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { logIn, logOut } from '../../actions'
import { Link } from 'react-router-dom'

function LogIn({ dispatch, user, loadProfiles }) {
  const logout = () => {
    dispatch(logOut())
  }

  const responseGoogle = (response) => {
    const profile = response.getBasicProfile()
    dispatch(logIn({
      id: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl()
    }))
  }

  return (
    <>
      {user.name ? <Link to="/">
        <GoogleLogout
          clientId="729329557892-e3l8r6ainb4abrevis8c7jhh3acklrf2.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout} />
      </Link>
        : <GoogleLogin
          clientId='729329557892-e3l8r6ainb4abrevis8c7jhh3acklrf2.apps.googleusercontent.com'
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={'single_host_origin'}
        />}
    </>
  );
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(LogIn)