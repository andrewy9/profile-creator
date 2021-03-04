import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchEducation } from '../actions'

function Education(props) {
  const [state, setState] = useState({
    education: [{
      provider: '',
      qualification: '',
      year: ''
    }]
  })

  const dispatchHandler = () => {
    props.dispatch(fetchEducation(state))
  }

  const handleChange = (evt) => {
    evt.preventDefault()
    const { name, value, id } = evt.target
    state.education[id][name] = value
    setState({ ...state })
  }

  const addMore = (evt) => {
    evt.preventDefault()
    setState({
      ...state,
      education: [...state.education, {
        provider: '',
        qualification: '',
        year: ''
      }]
    })
  }

  return (
    <div className="education">
      <h3>Education</h3>
      {
        state.education.map((el, idx) => {
          return (
            <div key={idx}>
              <label>Provider:</label>
              <input
                type='text'
                id={idx}
                className='education'
                name='provider'
                value={el.provider}
                onChange={handleChange}
                onBlur={dispatchHandler}>
              </input>

              <label>Qualification:</label>
              <input
                type='text'
                id={idx}
                className='education'
                name='qualification'
                value={el.qualification}
                onChange={handleChange}
                onBlur={dispatchHandler}>
              </input>

              <label>Year:</label>
              <input
                type='text'
                id={idx}
                className='education'
                name='year'
                value={el.year}
                onChange={handleChange}
                onBlur={dispatchHandler}>
              </input>
            </div>
          )
        })
      }
      <button className='addEducation' type='button' onClick={addMore}>Add More</button>
    </div>
  )
}

export default connect()(Education)