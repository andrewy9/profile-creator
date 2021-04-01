import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBasicDetails } from '../actions'
import { initialStates } from '../initialStates';

function BasicDetails(props) {
  const [state, setState] = useState(initialStates.basicDetails)

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
        <label id="firstName" className="label">First Name:</label>
        <div className="control is-expanded">
          <input aria-labelledby="Name" className='input is-small' type='text' name="firstName" id={0} value={state.firstName} onChange={handleChange}></input>
        </div>
        <label id="lastName" className="label">Last Name:</label>
        <div className="control is-expanded">
          <input aria-labelledby="Name" className='input is-small' type='text' name="lastName" id={0} value={state.lastName} onChange={handleChange}></input>
        </div>

        <label className="label">Phone:</label>
        <div className="control">
          <input className='input is-small' type='text' name="phone" id={1} value={state.phone} onChange={handleChange}></input>
        </div>
        <label className="label">Email:</label>
        <div className="control">
          <input className='input is-small' type='text' name="email" id={2} value={state.email} onChange={handleChange}></input>
        </div>
        <label className="label">Location:</label>
        <div className="control">
          <input className='input is-small' type='text' name="location" id={3} value={state.location} onChange={handleChange}></input>
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

function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(BasicDetails)
