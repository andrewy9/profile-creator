import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import {fetchUser} from '../actions'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function Login(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    image: ''
  });

  const responseGoogle = (response) => {
    const profile = response.getBasicProfile()
    console.log('response', response)
    console.log('profile', profile)

    setUser({
      id: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl(),
    })
  }

  const logout = () => {
    setUser({
      id: '',
      name: '',
      email: '',
      image: ''
    })
  }

  useEffect(() => {
    user.name ? setIsAuthenticated(true) : setIsAuthenticated(false)
    props.dispatch(fetchUser(user))
  }, [user])
  
  return (
    <>
      {isAuthenticated ? <AuthenticatedView logout={logout} user={user} setUser={setUser}/> : <UnAuthenticatedView responseGoogle={responseGoogle} />}
    </>
  )
}

function UnAuthenticatedView({ responseGoogle }) {
  return (
    < div className='google-login' >
      <GoogleLogin
        clientId='729329557892-e3l8r6ainb4abrevis8c7jhh3acklrf2.apps.googleusercontent.com'
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
    </div >
  )
}

function AuthenticatedView({user, logout}) {
  return (
    <div>
      <h1>
        Welcome
      </h1>
        <GoogleLogout
        clientId="729329557892-e3l8r6ainb4abrevis8c7jhh3acklrf2.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
         />
    </div>
  )
}



export default connect()(Login)