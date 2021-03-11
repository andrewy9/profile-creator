// feat.캐이트 배이야, 사라 노울즈, 앤드류 양
import React from 'react'
import { connect } from 'react-redux'


import Form from './Form'
import Preview from './Preview'
import Login from './Login'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='app'>
        <h1>Profile Creator</h1>
        <Login />
        <div className='form-div'>
        <Form />
        </div>
        <div className='preview-div'>
        <Preview />
        </div>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
  }
}

export default connect(mapStateToProps)(App)
