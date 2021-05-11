// feat.캐이트 배이야, 사라 노울즈, 앤드류 양
import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import FinalView from './FinalView'
import Home from './Home'
import UnauthenticatedHome from './UnauthenticatedHome'
import Nav from './Nav/Nav'

function App(props) {
  return (
    <Router>
      <div className='app'>
        <Nav />
        {props.user.name ? <AuthenticatedView /> : <UnAuthenticatedView />}
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
            <Route path='/' exact={true} component={UnauthenticatedHome} />
            {/* <Route path='/finalView' component={FinalView} /> */}
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
            <Route path='/finalView/:profileName' exact={true} component={FinalView} />
            <Route path='/' exact={true} component={Home} />
          </div>
        </div>
      </Router>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user,
    details: globalState.details,
  }
}

export default connect(mapStateToProps)(App)
