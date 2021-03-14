import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEmploymentHistory } from '../actions'

function EmploymentHistory(props) {
  const [state, setState] = useState(
    [{
      employer: '',
      employmentDate: '',
      role: '',
      details: ''
    }]
  )

  useEffect(() => {
    dispatchHandler()
  })

  const dispatchHandler = () => {
    props.dispatch(fetchEmploymentHistory(state))
  }

  const handleChange = (evt) => {
    evt.preventDefault()
    const { name, value, id } = evt.target
    state[id][name] = value
    setState([...state])
  }

  const addMore = (evt) => {
    console.log('button tested')
    evt.preventDefault()
    setState([
      ...state,
      {
        employer: '',
        employmentDate: '',
        role: '',
        details: ''
      }
    ])
  }

  return (
    <div className='employmentHistory'>
      <h3>Employment History</h3>
      {state.map((el, idx) => {
        return (
          <div key={idx + 1}>
            <label>Employer #{idx + 1}</label>
            <input
              type='text'
              id={idx}
              className="employmentHistory"
              name='employer'
              value={el.employer}
              onChange={handleChange}>
            </input>

            <label>Employment Date</label>
            <input
              type='text'
              id={idx}
              className="employmentHistory"
              name="employmentDate"
              value={el.employmentDate}
              onChange={handleChange}>
            </input>

            <label>Role</label>
            <input
              type='text'
              id={idx}
              className="employmentHistory"
              name="role"
              value={el.role}
              onChange={handleChange}>
            </input>

            <label>Details</label>
            <input
              type='text'
              id={idx}
              className="employmentHistory"
              name="details"
              value={el.details}
              onChange={handleChange}>
            </input>
          </div>
        )
      })}
      <button type='button' className='addEmploymentHistory' onClick={addMore}>Add More</button>
    </div>
  )

}

export default connect()(EmploymentHistory)

