import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBasicDetails } from '../actions'

function BasicDetails (props) {
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    profileIntro: '',
    employmentHistory: ''
  })

  useEffect(() => {
    dispatchHandler()
  })

  const dispatchHandler = () => {
    props.dispatch(fetchBasicDetails(state))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className='content'>
      <div className='basicDetails'>
        <h3>Basic Details</h3>
        <label id="Name" className="label">Name:</label>
        <div className="control is-expanded">
          <input aria-labelledby="Name" className='input is-small' type='text' name="name" id={0} value={state.name} onChange={handleChange}></input>
        </div>
        <label className="label">Phone:</label>
        <div className="control">
          <input className='input is-small' type='text' name="phone" id={1} value={state.phone} onChange={handleChange}></input>
        </div>
        <label className="label">Email:</label>
        <div className="control">
          <input className='input is-small' type='text' name="email" id={2} value={state.email} onChange={handleChange}></input>
        </div>
      </div >

      <div className='profileIntro'>
        <label className="label">Profile Intro:</label>
        <div className="control">
          <textarea className='textarea is-small' type='text' name="profileIntro" value={state.profileIntro} onChange={handleChange}></textarea>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(BasicDetails)
