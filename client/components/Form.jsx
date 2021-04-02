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
  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      profileName: props.profile.profileName,
      userId: props.user.id,
      profile: {
        firstName: props.profile.firstName,
        lastName: props.profile.lastName,
        phone: props.profile.phone,
        email: props.profile.email,
        location: props.profile.location,
        profileIntro: props.profile.profileIntro
      },
      socials: props.socials,
      skills: props.skills,
      employmentHistory: props.employmentHistory,
      oldEmploymentHistory: props.oldEmploymentHistory,
      educations: props.educations
    }

    postFormDataToDatabase(formData)
  }
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="field">
              <form onSubmit={handleSubmit}>
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
    profile: globalState.profile,
    socials: globalState.socials,
    skills: globalState.skills,
    educations: globalState.educations,
    employmentHistory: globalState.employmentHistory,
    oldEmploymentHistory: globalState.oldEmploymentHistory
  }
}

export default connect(mapStateToProps)(Form)
