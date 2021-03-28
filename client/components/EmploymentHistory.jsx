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
                type='text'
                id={idx}
                className="employmentHistory input is-small"
                name="employmentDate"
                value={el.employmentDate}
                onChange={handleChange}>
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
      <div className="control">
        <button type='button' className='addEmploymentHistory button is-small' onClick={addMore}>Add More</button>
      </div>
    </div>
  )

}

const mapStateToProps = (globalState) => {
  user.globalState.user
}

export default connect()(EmploymentHistory)

