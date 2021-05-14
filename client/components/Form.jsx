import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postFormDataToDatabase, postImage } from '../apis/apiController'

import Profile from './Profile'
import Socials from './Socials'
import Skills from './Skills'
import EmploymentHistory from './EmploymentHistory'
import OldEmploymentHistory from './OldEmploymentHistory'
import Educations from './Educations'

function Form(props) {
  const [submitSuccess, setSubmitSuccess] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      profileName: props.profile.profileName,
      userId: props.user.id,
      profile: {
        firstName: props.profile.firstName,
        lastName: props.profile.lastName,
        title: props.profile.title,
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

    if (props.user.profileList.some(profile => profile.profileName.trim() === props.profile.profileName.trim())) {
      console.log('error, duplicate profilename submission attempted')
      setSubmitSuccess({ success: false })
    } else {
      postFormDataToDatabase(formData)
      if (props.profileImage) {
        props.profileImage.append('userId', props.user.id)
        props.profileImage.append('profileName', props.profile.profileName)
        postImage(props.profileImage)
      }
      setSubmitSuccess({ success: true })
    }
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
                  {
                    submitSuccess
                      ? [
                        (submitSuccess.success
                          ? <div key={0}>Success!!</div>
                          : <div key={1}>Something went wrong...</div>
                        )
                      ]
                      : <span></span>
                  }
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
    profileImage: globalState.profile.profileImage.image,
    socials: globalState.socials.social,
    skills: globalState.skills.skill,
    educations: globalState.educations.education,
    employmentHistory: globalState.employmentHistory.employment,
    oldEmploymentHistory: globalState.oldEmploymentHistory.oldEmployment
  }
}

export default connect(mapStateToProps)(Form)
