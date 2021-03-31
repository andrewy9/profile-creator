import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEmploymentHistory } from '../actions'

function EmploymentHistory (props) {
  const [state, setState] = useState(
    [{
      employer: '',
      // employmentDate,
      employmentDateStart: '', //New
      employmentDateEnd: '',  //New
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

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value, id } = e.target
    state[id][name] = value
    setState([...state])
  }

  const addMore = (e) => {
    e.preventDefault()
    setState([
      ...state,
      {
        employer: '',
        employmentDateStart: '', //New
        employmentDateEnd: '',  //New
        role: '',
        details: ''
      }
    ])
  }

  return (
    <div className='employmentHistory content'>
      <h3>Employment History</h3>
      {state.map((el, idx) => {
        return (
          <div key={idx + 1}>
            <div className="control">
              <label className='label'>Employer #{idx + 1}</label>
              <input
                type='text'
                id={idx}
                className="employmentHistory input is-small"
                name='employer'
                value={el.employer}
                onChange={handleChange}>
              </input>
            </div>

            <label className='label'>Employment Date</label>
            <div className="control">
              <input
                type='month'
                id={idx}
                className="employmentHistory input is-small"
                name="employmentDateStart"
                value={el.employmentDateStart}
                onChange={handleChange}
                min="1940-01">
              </input>
              <p> until </p>
              <input
                type='month'
                id={idx}
                className="employmentHistory input is-small"
                name="employmentDateEnd"
                value={el.employmentDateEnd}
                onChange={handleChange}
                min="1940-01">
              </input>
            </div>

            <label className='label'>Role</label>
            <div className="control">
              <input
                type='text'
                id={idx}
                className="employmentHistory input is-small"
                name="role"
                value={el.role}
                onChange={handleChange}>
              </input>
            </div>

            <label className='label'>Details</label>
            <div className="control">
              <input
                type='text'
                id={idx}
                className="employmentHistory input is-small"
                name="details"
                value={el.details}
                onChange={handleChange}>
              </input>
            </div>
          </div>
        )
      })}
      <div className="control ">
        <button type='button' className='addEmploymentHistory button is-small is-light button-spacer' onClick={addMore}>Add More</button>
      </div>
    </div>
  )
}

export default connect()(EmploymentHistory)
