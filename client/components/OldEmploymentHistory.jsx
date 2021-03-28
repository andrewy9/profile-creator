import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOldEmploymentHistory } from '../actions'

function OldEmploymentHistory(props) {
  const [state, setState] = useState(
    [{
      oldEmployer: '',
      oldEmploymentDate: '',
      oldRole: ''
    }]
  )

  const dispatchHandler = () => {
    props.dispatch(fetchOldEmploymentHistory(state))
  }

  useEffect(() => {
    dispatchHandler()
  })

  const handleChange = (evt) => {
    evt.preventDefault()
    const { name, value, id, className } = evt.target
    state[id][name] = value
    setState([...state])
  }

  const addMore = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault()
    }
    setState(
      [...state, {
        oldEmployer: '',
        oldEmploymentDate: '',
        oldRole: ''
      }]
    )
  }

  return (

    <div className='oldEmploymentHistory'>
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
                  className="oldEmploymentHistory input is-small"
                  name="oldEmployer"
                  value={el.oldEmployer}
                  onChange={handleChange}>
                </input>
              </div>

              <label className='label'>Employment Date</label>
              <div className='control'>
                <input
                  type='text'
                  id={idx}
                  className="oldEmploymentHistory input is-small"
                  name="oldEmploymentDate"
                  value={el.oldEmploymentDate}
                  onChange={handleChange}>
                </input>
              </div>

              <label className='label'>Role:</label>
              <div className='control'>
                <input
                  type='text'
                  id={idx}
                  className="oldEmploymentHistory input is-small"
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
        <button className='addOldEmploymentHistory button is-small' type='button' onClick={addMore}>Add More</button>
      </div >
    </div>
  )
}
export default connect()(OldEmploymentHistory)