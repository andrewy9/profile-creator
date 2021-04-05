import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { appendEmploymentHistory, updateEmploymentHistory, removeEmploymentHistory } from '../actions/employmentHistory'

function EmploymentHistory(props) {
  const initialState = {
    employer: '',
    employmentDateStart: '',
    employmentDateEnd: '',
    role: '',
    details: ''
  }

  const handleChange = (e) => {
    e.preventDefault()
    props.dispatch(updateEmploymentHistory(e.target))
  }

  const handleToggle = (e) => {
    let toggle = false;
    toggle = !toggle
    console.log(toggle)
  }

  const addMoreButton = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    props.dispatch(appendEmploymentHistory({ ...initialState }))
  }

  const removeButton = (id) => {
    props.dispatch(removeEmploymentHistory(id))
  }

  return (
    <div className='employmentHistory content'>
      <h3>Employment History</h3>
      {props.employmentHistory.map((el, idx) => {
        return (
          <div key={idx}>
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
              <textarea
                type='text'
                id={idx}
                className="employmentHistory textarea is-small"
                name="details"
                value={el.details}
                onChange={handleChange}>
              </textarea>
            </div>

            {props.employmentHistory.length > 1 &&
              <div className="control">
                <button type='button' className='removeEmploymentHistory button is-small is-light button-spacer' onClick={() => removeButton(idx)}>Remove</button>
              </div>}
          </div>
        )
      })}


      <div className="control ">
        <button type='button' className='addEmploymentHistory button is-small is-light button-spacer' onClick={addMoreButton}>Add More</button>
      </div>
    </div>
  )
}

function mapPropsToState(gloablState) {
  return {
    employmentHistory: gloablState.employmentHistory
  }
}

export default connect(mapPropsToState)(EmploymentHistory)
