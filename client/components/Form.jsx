import React, { useState } from 'react'
import { connect } from 'react-redux'

function Form() {
  const [state, setState] = useState({
    name: 'name',
    contact: 'contact'
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })

  }

  return (
    <div>
      {console.log(state)}
      <form>
        <label>Name:</label>
        <input type='text' name="name" value={state.name} onChange={handleChange}></input>
        <label>Contact:</label>
        <input type='text' name="contact" value={state.contact} onChange={handleChange}></input>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}



export default connect()(Form)