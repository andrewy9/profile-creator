import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchEmploymentHistory } from '../actions'

function EmploymentHistory(props) {
  const [state, setState] = useState({
    employmentHistory: [{
      employer: '123',
      employmentDate: 'default employment date',
      role: 'default role',
      details: 'default details'
    }]
  })

  const dispatchHandler = () => {
    props.dispatch(fetchEmploymentHistory(state))
  }

  const handleChange = (evt) => {
    const { name, value, id } = evt.target
    state.employmentHistory[id][name] = value
    setState({ ...state })
  }

  const addMore = (evt) => {
    setState({
      ...state,
      employmentHistory: [...state.employmentHistory, {
        employer: '',
        employmentDate: '',
        role: '',
        details: ''
      }]
    })
    evt.preventDefault()
  }

  return (
    <div className='employmentHistory'>
      <h3>Employment History</h3>
      {state.employmentHistory.map((el, idx) => {
        return (
          <div key={idx + 1}>
            <label>Employer #{idx + 1}</label>
            <input
              type='text'
              id={idx}
              className="employmentHistory"
              name='employer'
              value={el.employer}
              onChange={handleChange}
              onBlur={dispatchHandler}>
            </input>

            <label>Employment Date</label>
            <input
              type='text'
              id={idx}
              className="employmentHistory"
              name="employmentDate"
              value={el.employmentDate}
              onChange={handleChange}
              onBlur={dispatchHandler}>
            </input>

            <label>Role</label>
            <input
              type='text'
              id={idx}
              className="employmentHistory"
              name="role"
              value={el.role}
              onChange={handleChange}
              onBlur={dispatchHandler}>
            </input>

            <label>Details</label>
            <input
              type='text'
              id={idx}
              className="employmentHistory"
              name="details"
              value={el.details}
              onChange={handleChange}
              onBlur={dispatchHandler}>
            </input>
          </div>
        )
      })}
      <button className='addEmploymentHistory' onClick={addMore}>Add More</button>
    </div>
  )

}

export default connect()(EmploymentHistory)