import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOldEmploymentHistory } from '../actions'

function OldEmploymentHistory (props) {
  const [state, setState] = useState(
    [{
      oldEmployer: '',
      // oldEmploymentDate: '',
      oldEmploymentDateStart: '', //New
      oldEmploymentDateEnd: '', //New
      oldRole: ''
    }]
  )

  const dispatchHandler = () => {
    props.dispatch(fetchOldEmploymentHistory(state))
  }

  useEffect(() => {
    dispatchHandler()
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value, id } = e.target
    state[id][name] = value
    setState([...state])
  }

  const addMore = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    setState(
      [...state, {
        oldEmployer: '',
        oldEmploymentDateStart: '',
        oldEmploymentDateEnd: '',
        oldRole: ''
      }]
    )
  }

  return (

    <div className='oldEmploymentHistory content'>
      <h3>Older Employment History</h3>
      {
        state.map((el, idx) => {
          return (
            <div key={idx}>
              <label className='label'>Employer #{idx + 1}:</label>
              <div className='control'>
                <input
                  type='text'
                  id={idx}
                  className="input is-small"
                  name="oldEmployer"
                  value={el.oldEmployer}
                  onChange={handleChange}>
                </input>
              </div>

              <label className='label'>Employment Date</label>
              <div className='control'>
                <input
                  type='month'
                  id={idx}
                  className="input is-small"
                  name="oldEmploymentDateStart"
                  value={el.oldEmploymentDateStart}
                  onChange={handleChange}
                  min="1940-01">
                </input>
                <p> until </p>
                <input
                  type='month'
                  id={idx}
                  className="input is-small"
                  name="oldEmploymentDateEnd"
                  value={el.oldEmploymentDateEnd}
                  onChange={handleChange}
                  min="1940-01">
                </input>
              </div>

              <label className='label'>Role:</label>
              <div className='control'>
                <input
                  type='text'
                  id={idx}
                  className="input is-small"
                  name="oldRole"
                  value={el.oldRole}
                  onChange={handleChange}>
                </input>
              </div>
            </div>
          )
        })
      }
      <div className="control">
        <button className='addOldEmploymentHistory button is-small is-light button-spacer' type='button' onClick={addMore}>Add More</button>
      </div >
    </div>
  )
}
export default connect()(OldEmploymentHistory)
