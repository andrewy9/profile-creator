import React from 'react'
import { connect } from 'react-redux'
import { appendEducation, updateEducation, removeEducation } from '../actions/educations'

function Educations(props) {
  const initialState = [{
    provider: '',
    qualification: '',
    yearStart: '',
    yearEnd: ''
  }]

  console.log(props)

  const handleChange = (e) => {
    e.preventDefault()
    props.dispatch(updateEducation(e.target))
  }

  const addMoreButton = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    props.dispatch(appendEducation(...initialState))
  }

  const removeButton = (id) => {
    props.dispatch(removeEducation(id))
  }

  return (
    <div className="education content">
      <h3>Education</h3>
      {
        props.educations.map((education, idx) => {
          return (
            <div key={idx}>
              <label className='label'>Provider #{idx + 1}:</label>
              <div className="control">
                <input
                  type='text'
                  id={idx}
                  className='education input is-small'
                  name='provider'
                  value={education.provider}
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
                  value={education.qualification}
                  onChange={handleChange}>
                </input>
              </div>
              <label className='label'>Start Date:</label>
              <div className="control">
                <input
                  type='month'
                  id={idx}
                  className='education input is-small'
                  name='yearStart'
                  value={education.yearStart}
                  onChange={handleChange}>
                </input>
              </div>
              <label className='label'>End Date:</label>
              <div className="control">
                <input
                  type='month'
                  id={idx}
                  className='education input is-small'
                  name='yearEnd'
                  value={education.yearEnd}
                  onChange={handleChange}>
                </input>
              </div>

              {props.educations.length > 1 &&
                <div className="control">
                  <button type='button' className='removeEducation button is-small is-light button-spacer' onClick={() => removeButton(idx)}>Remove</button>
                </div>}

            </div>
          )
        })
      }
      <div className="control">
        <button className='addEducation button is-small is-light button-spacer' type='button' onClick={addMoreButton}>Add More</button>
      </div>
    </div>
  )
}

function mapStateToProps(globalState) {
  console.log('globalState rendered', globalState.educations.education)
  return {
    educations: globalState.educations.education
  }
}
export default connect(mapStateToProps)(Educations)
