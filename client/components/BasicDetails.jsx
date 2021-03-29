import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFormDetails } from '../actions'


function BasicDetails(props) {
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
    props.dispatch(fetchFormDetails(state))
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })
    // props.dispatch(fetchFormDetails({ [name]: value }))
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

function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(BasicDetails)