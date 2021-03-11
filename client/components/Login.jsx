import React, { useEffect, useState } from 'react';

import { GoogleLogin, useGoogleLogin } from 'react-google-login';

function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();


  const responseGoogle = (response) => {
    const profile = response.getBasicProfile()

    // console.log(profile)
    // console.log(profile.getName())
    // console.log(profile.getEmail())
    // console.log(profile.getImageUrl())

    setUser({
      name: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl()
    })
  }

  useEffect(() => {
    console.log(user)
    user ? setIsAuthenticated(true) : setIsAuthenticated(false)
  })

  return (
    <>
      {isAuthenticated ? <AuthenticatedView /> : <UnAuthenticatedView responseGoogle={responseGoogle} />}
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

function AuthenticatedView() {
  return (
    <h1>
      Welcome
    </h1>
  )
}

export default Login