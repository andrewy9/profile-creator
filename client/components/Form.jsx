import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postFormDataToDatabase } from '../apis/apiController'

import BasicDetails from './BasicDetails'
import EmploymentHistory from './EmploymentHistory'
import OldEmploymentHistory from './OldEmploymentHistory'
import Education from './Education'

function Form (props) {
  const [state, setState] = useState({
    profileName: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      profileName: state.profileName,
      userId: props.user.id,
      details: {
        name: props.details.name,
        phone: props.details.phone,
        email: props.details.email,
        profileIntro: props.details.profileIntro
      },
      employmentHistory: props.employmentHistory,
      oldEmploymentHistory: props.oldEmploymentHistory,
      education: props.education
    }

    postFormDataToDatabase(formData)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="field">
              <form onSubmit={handleSubmit}>
                <div className="content">
                  <label className='label'>CV Profile Name: </label>
                </div>
                <div className="field-body block">
                  <div className='field'>
                    <div className='control'>
                      <input className='input is-small is-hovered' type='text' name='profileName' value={state.profileName} onChange={handleChange}></input>
                    </div>
                  </div>
                </div>
                <BasicDetails />
                <EmploymentHistory />
                <OldEmploymentHistory />
                <Education />
                <div className="control">
                  <input className='button is-fullwidth is-small' id='submit' type='submit' value='Submit' />
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    user: globalState.user,
    details: globalState.details,
    education: globalState.education,
    employmentHistory: globalState.employmentHistory,
    oldEmploymentHistory: globalState.oldEmploymentHistory
  }
}

export default connect(mapStateToProps)(Form)
