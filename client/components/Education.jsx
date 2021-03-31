import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEducation } from '../actions'

function Education (props) {
  const [state, setState] = useState(
    [{
      provider: '',
      qualification: '',
      year: ''
    }]
  )

  useEffect(() => {
    dispatchHandler()
  })

  const dispatchHandler = () => {
    props.dispatch(fetchEducation(state))
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
      [...state, {
        provider: '',
        qualification: '',
        year: ''
      }]
    )
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
