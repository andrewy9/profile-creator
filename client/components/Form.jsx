import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postFormDataToDatabase } from '../apis/apiController'

import Profile from './Profile'
import Socials from './Socials'
import Skills from './Skills'
import EmploymentHistory from './EmploymentHistory'
import OldEmploymentHistory from './OldEmploymentHistory'
import Educations from './Educations'

function Form(props) {
  const [state, setState] = useState({
    profileName: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      profileName: state.profileName,
      userId: props.user.id,
      profile: {
        firstName: props.profile.firstName,
        lastName: props.profile.lastName,
        phone: props.profile.phone,
        email: props.profile.email,
        location: proprs.profile.location,
        profileIntro: props.profile.profileIntro
      },
      employmentHistory: props.employmentHistory,
      oldEmploymentHistory: props.oldEmploymentHistory,
      education: props.educations
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
                <Profile />
                <Socials />
                <Skills />
                <EmploymentHistory />
                <OldEmploymentHistory />
                <Educations />
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

function mapStateToProps(globalState) {
  return {
    user: globalState.user,
    details: globalState.details,
    educations: globalState.educations,
    employmentHistory: globalState.employmentHistory,
    oldEmploymentHistory: globalState.oldEmploymentHistory
  }
}

export default connect(mapStateToProps)(Form)
