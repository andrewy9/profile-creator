import React, { useState } from 'react'
import { connect } from 'react-redux'

function OlderEmploymentHistory() {
  const [state, setState] = useState({
    employer: 'Employer',
    employmentDate: 'Employment Date',
    role: 'Role'
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })
  }

  return (
    <div>
      {console.log(state)}
      <h3>Older Employment History</h3>
      {/* <form> */}
      <label>Employer:</label>
      <input type='text' name="employer" value={state.employer} onChange={handleChange}></input>
      <label>Employment Date</label>
      <input type='text' name="employmentDate" value={state.employmentDate} onChange={handleChange}></input>
      <label>Role:</label>
      <input type='text' name="role" value={state.role} onChange={handleChange}></input>
      {/* <input type='submit' value='Submit' /> */}
      {/* </form> */}
    </div>
  )
}


export default connect()(OlderEmploymentHistory)