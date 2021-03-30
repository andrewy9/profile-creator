// feat.캐이트 배이야, 사라 노울즈, 앤드류 양
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
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
    <Router>
      <div className='app'>
        <Nav isAuthenticated={isAuthenticated} logout={logout} responseGoogle={responseGoogle} />
        {isAuthenticated ? <AuthenticatedView /> : <UnAuthenticatedView />}
      </div>
    </Router>
  )
}

function UnAuthenticatedView() {
  return (
    <Router>
      < div className='google-login' >
        <div className="hero-body">
          <div className="container">
            <Route path='/finalView/:profile/:layout' component={FinalView} />
          </div>
        </div>
      </div>
    </Router >
  )
}

function AuthenticatedView() {
  return (
    <>
      <Router>
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