import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { postFormDataToDatabase, getDetails } from '../apis/detailsApi'

import BasicDetails from './BasicDetails'
import EmploymentHistory from './EmploymentHistory'
import OldEmploymentHistory from './OldEmploymentHistory'
import Education from './Education'

function Form(props) {

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      user_id: props.user.id,
      details: {
        name: props.details.name,
        phone: props.details.phone,
        email: props.details.email,
        profile_intro: props.details.profileIntro,
      },
      employmentHistory: props.employmentHistory,
      oldEmploymentHistory: props.oldEmploymentHistory,
      education: props.education
    }

    postFormDataToDatabase(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <BasicDetails />
        <EmploymentHistory />
        <OldEmploymentHistory />
        <Education />
        <input id='submit' type='submit' value='Submit' />
      </form>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user,
    details: globalState.details,
    education: globalState.education,
    employmentHistory: globalState.employmentHistory,
    oldEmploymentHistory: globalState.oldEmploymentHistory
  }
}

export default connect(mapStateToProps)(Form)