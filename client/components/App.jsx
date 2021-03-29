// feat.캐이트 배이야, 사라 노울즈, 앤드류 양
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import { GoogleLogin } from 'react-google-login';
import { HashRouter as Router, Route } from 'react-router-dom'

import FinalView from './FinalView'
import Home from './Home'
import Nav from './Nav'

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    image: ''
  });

  const responseGoogle = (response) => {
    const profile = response.getBasicProfile()

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
    console.log('logged out')
  }

  useEffect(() => {
    user.name ? setIsAuthenticated(true) : setIsAuthenticated(false)
    props.dispatch(fetchUser(user))
  }, [user])

  return (
    <div className='app'>
      {isAuthenticated ? <AuthenticatedView logout={logout} user={user} setUser={setUser} /> : <UnAuthenticatedView responseGoogle={responseGoogle} />}
    </div>
  )

}

function UnAuthenticatedView({ responseGoogle }) {
  return (
    <Router>
      < div className='google-login' >
        <Nav />
        <div className="hero-body">
          <div className="container">
            <GoogleLogin
              clientId='729329557892-e3l8r6ainb4abrevis8c7jhh3acklrf2.apps.googleusercontent.com'
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </div>
    </Router >
  )
}

function AuthenticatedView({ user, logout }) {
  return (
    <>
      <Router>
        <Nav logout={logout} />
        <div className="hero-body">
          <div className="container">
            <Route path='/finalView' component={FinalView} />
            <Route path='/' exact={true} component={Home} />
          </div>
        </div>
      </Router>
    </>
  )
}

export default connect()(App)
