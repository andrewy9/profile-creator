import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchEducation } from '../actions'

function Education(props) {
  const [state, setState] = useState({
    educationHistory: [{
      provider: '',
      qualification: '',
      year: ''
    }]
  })

  const dispatchHandler = () => {
    console.log('hitting dispatch handler')
    props.dispatch(fetchEducation(state))
  }

  const handleChange = (evt) => {
    const { name, value, id } = evt.target
    state.educationHistory[id][name] = value
    setState({ ...state })
    console.log(props.test)
  }

  const addMore = (evt) => {
    setState({
      ...state,
      educationHistory: [...state.educationHistory, {
        provider: '',
        qualification: '',
        year: ''
      }]
    })
    evt.preventDefault()
  }

  return (
    <div className="education">
      <h3>Education</h3>
      {
        state.educationHistory.map((el, idx) => {
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
      <button className='addEducation' onClick={addMore}>Add More</button>
    </div>
  )
}

export default connect()(Education)