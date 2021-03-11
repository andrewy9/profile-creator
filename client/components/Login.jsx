import React from 'react';
// import ReactDOM from 'react-dom';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';

function Login () {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)
  }

 
  return(
    <div className='google-login'>
      {console.log('hello')}
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    </div>
  )
}

export default Login