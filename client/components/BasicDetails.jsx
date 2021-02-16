import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchBasicDetails } from '../actions'

function BasicDetails(props) {
  const [state, setState] = useState(
    {
      name: 'name',
      phone: 'phone',
      email: 'email'
    }
  )

  const dispatchHandler = () => {
    props.dispatch(fetchBasicDetails(state))
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })
  }

  return (
    <div>
      {console.log(state)}
      <h3>Basic Details</h3>
      {/* <form> */}
      <label>Name:</label>
      <input type='text' name="name" value={state.name} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Phone:</label>
      <input type='text' name="phone" value={state.phone} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Email:</label>
      <input type='text' name="email" value={state.email} onChange={handleChange} onBlur={dispatchHandler}></input>
      {/* <input type='submit' value='Submit' /> */}
      {/* </form> */}
    </div>
  )
}

export default connect()(BasicDetails)