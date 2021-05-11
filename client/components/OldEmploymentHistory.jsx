import React from 'react'
import { connect } from 'react-redux'
import { appendOldEmploymentHistory, updateOldEmploymentHistory, removeOldEmploymentHistory } from '../actions/oldEmploymentHistory'

function OldEmploymentHistory(props) {
  const initialState = {
    oldEmployer: '',
    oldEmploymentDateStart: '',
    oldEmploymentDateEnd: '',
    oldRole: ''
  }

  const handleChange = (e) => {
    e.preventDefault()
    props.dispatch(updateOldEmploymentHistory(e.target))
  }

  const addMoreButton = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    props.dispatch(appendOldEmploymentHistory({ ...initialState }))
  }

  const removeButton = (id) => {
    props.dispatch(removeOldEmploymentHistory(id))
  }

  return (
    < div className='oldEmploymentHistory content' >
      {props.oldEmploymentHistory.length == 0 ?
        <div className="control">
          <button className='addSocial button is-small is-light button-spacer' type='button' onClick={addMoreButton}>Add 'other' employment</button>
        </div >
        :
        <div>
          <h3>Older Employment History</h3>
          {props.oldEmploymentHistory.map((el, idx) => {
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
                  <button type='button' className='removeOldEmploymentHistory button is-small is-light button-spacer' onClick={() => removeButton(idx)}>Remove</button>
                </div>
              </div>
            )
          })}
        </div>
      }
      {props.oldEmploymentHistory.length > 0 &&
        <div className="control">
          <button className='addOldEmploymentHistory button is-small is-light button-spacer' type='button' onClick={addMoreButton}>Add More</button>
        </div >}
    </div >
  )
}
function mapPropsToState(gloablState) {
  return {
    oldEmploymentHistory: gloablState.oldEmploymentHistory.oldEmployment
  }
}

export default connect(mapPropsToState)(OldEmploymentHistory)
