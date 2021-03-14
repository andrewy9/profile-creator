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
  }, [state])

  const dispatchHandler = () => {
    props.dispatch(fetchFormDetails(state))
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })
    // props.dispatch(fetchFormDetails({ [name]: value }))
  }



  return (
    <div>
      <div className='basicDetails' >
        <h3>Basic Details</h3>
        <label id="Name">Name:</label>
        <input aria-labelledby="Name" type='text' name="name" id={0} value={state.name} onChange={handleChange}></input>
        <label>Phone:</label>
        <input type='text' name="phone" id={1} value={state.phone} onChange={handleChange}></input>
        <label>Email:</label>
        <input type='text' name="email" id={2} value={state.email} onChange={handleChange}></input>
      </div >

      <div className='profileIntro'>
        <h3>Profile Intro</h3>
        <label>Profile Intro:</label>
        <input type='text' name="profileIntro" value={state.profileIntro} onChange={handleChange}></input>
      </div>
    </div>
  )
}

export default connect()(BasicDetails)