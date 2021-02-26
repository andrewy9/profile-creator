// feat.캐이트 배이야 & 사라 노울즈
import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'
import Form from './Form'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount() {
    this.props.dispatch(fetchFruits())
  }

  render() {
    return (
      <div className='app'>
        <h1>Profile Creator</h1>
        <Form />
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
