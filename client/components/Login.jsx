import React, { useEffect, useState } from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    image: ''
  });

  const responseGoogle = (response) => {
    const profile = response.getBasicProfile()

    setUser({
      name: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl()
    })
  }

  const logout = () => {
    setUser({
      name: '',
      email: '',
      image: ''
    })
  }

  useEffect(() => {
    user.name ? setIsAuthenticated(true) : setIsAuthenticated(false)
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

export default Login