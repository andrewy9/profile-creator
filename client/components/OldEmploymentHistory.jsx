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
              <label>Employer #{idx + 1}:</label>
              <input
                type='text'
                id={idx}
                className="oldEmploymentHistory"
                name="oldEmployer"
                value={el.oldEmployer}
                onChange={handleChange}>
              </input>

              <label>Employment Date</label>
              <input
                type='text'
                id={idx}
                className="oldEmploymentHistory"
                name="oldEmploymentDate"
                value={el.oldEmploymentDate}
                onChange={handleChange}>
              </input>

              <label>Role:</label>
              <input
                type='text'
                id={idx}
                className="oldEmploymentHistory"
                name="oldRole"
                value={el.oldRole}
                onChange={handleChange}>
              </input>
            </div>
          )
        })
      }
      <button className='addOldEmploymentHistory' type='button' onClick={addMore}>Add More</button>
    </div >
  )
}
export default connect()(OldEmploymentHistory)