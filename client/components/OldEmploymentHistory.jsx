import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOldEmploymentHistory } from '../actions'
import { initialStates } from '../initialStates'

function OldEmploymentHistory(props) {
  const [state, setState] = useState(
    [initialStates.oldEmploymentHistory]
  )

  useEffect(() => {
    if (state.length > 0) {
      return dispatchHandler(state)
    } return dispatchHandler([initialStates.oldEmploymentHistory])
  })

  const dispatchHandler = (data) => {
    props.dispatch(fetchOldEmploymentHistory(data))
  }

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
      [...state, initialStates.oldEmploymentHistory]
    )
  }

  const remove = (idx) => {
    let removed = [...state]
    removed.splice(idx, 1);
    setState(removed)
  }

  return (
    < div className='oldEmploymentHistory content' >
      {state.length == 0 ?
        <div className="control">
          <button className='addSocial button is-small is-light button-spacer' type='button' onClick={addMore}>Add 'other' employments</button>
        </div >
        :
        <div>
          <h3>Older Employment History</h3>
          {state.map((el, idx) => {
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

                <div className="control">
                  <button type='button' className='removeOldEmploymentHistory button is-small is-light button-spacer' onClick={() => remove(idx)}>Remove</button>
                </div>
              </div>
            )
          })}
        </div>
      }
      {state.length > 0 &&
        <div className="control">
          <button className='addOldEmploymentHistory button is-small is-light button-spacer' type='button' onClick={addMore}>Add More</button>
        </div >}
    </div >
  )
}
export default connect()(OldEmploymentHistory)
