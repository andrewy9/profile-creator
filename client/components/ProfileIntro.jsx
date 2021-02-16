import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchProfileIntro } from '../actions'

function ProfileIntro() {
  const [state, setState] = useState({
    profileIntro: 'Profile Intro'
  })


  const dispatchHandler = () => {
    props.dispatch(fetchProfileIntro(state))
  }


  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })
  }

  return (
    <div>
      {console.log(state)}
      <h3>Profile Intro</h3>
      {/* <form> */}
      <label>Profile Intro:</label>
      <input type='text' name="profileIntro" value={state.profileIntro} onChange={handleChange} onBlur={dispatchHandler}></input>
      {/* <input type='submit' value='Submit' /> */}
      {/* </form> */}
    </div>
  )
}


export default connect()(ProfileIntro)