import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEducation } from '../actions'
import { initialStates } from '../initialStates'

function Education(props) {
  const [state, setState] = useState(
    [initialStates.education]
  )

  useEffect(() => {
    if (state.length > 0) {
      return dispatchHandler(state)
    } return dispatchHandler([initialStates.education])
  })

  const dispatchHandler = (data) => {
    props.dispatch(fetchEducation(data))
  }

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value, id } = e.target
    state[id][name] = value
    setState([...state])
  }

  const addMore = (e) => {
    e.preventDefault()
    setState(
      [...state, initialStates.education]
    )
  }

  const remove = (idx) => {
    let removed = [...state]
    removed.splice(idx, 1);
    setState(removed)
  }

  return (
    <div className="education content">
      <h3>Education</h3>
      {
        state.map((el, idx) => {
          return (
            <div key={idx}>
              <label className='label'>Provider:</label>
              <div className="control">
                <input
                  type='text'
                  id={idx}
                  className='education input is-small'
                  name='provider'
                  value={el.provider}
                  onChange={handleChange}>
                </input>
              </div>
              <label className='label'>Qualification:</label>
              <div className="control">
                <input
                  type='text'
                  id={idx}
                  className='education input is-small'
                  name='qualification'
                  value={el.qualification}
                  onChange={handleChange}>
                </input>
              </div>
              <label className='label'>Year:</label>
              <div className="control">
                <input
                  type='text'
                  id={idx}
                  className='education input is-small'
                  name='year'
                  value={el.year}
                  onChange={handleChange}>
                </input>
              </div>

              <div className="control">
                <button type='button' className='education button is-small is-light button-spacer' onClick={() => remove(idx)}>Remove</button>
              </div>

            </div>
          )
        })
      }
      <div className="control">
        <button className='addEducation button is-small is-light button-spacer' type='button' onClick={addMore}>Add More</button>
      </div>
    </div>
  )
}

export default connect()(Education)
