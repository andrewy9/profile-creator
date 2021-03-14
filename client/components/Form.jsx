import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { postDetailsToDatabase, postOldEmploymentHistoryToDatabase, postEmploymentHistoryToDatabase, postEducationHistoryToDatabase, getDetails } from '../apis/detailsApi'

import BasicDetails from './BasicDetails'
import EmploymentHistory from './EmploymentHistory'
import OldEmploymentHistory from './OldEmploymentHistory'
import Education from './Education'


function Form(props) {

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      user_id: props.user.id,
      name: props.details.name,
      phone: props.details.phone,
      email: props.details.email,
      profile_intro: props.details.profileIntro,
      employmentHistory: props.employmentHistory,
      oldEmploymentHistory: props.oldEmploymentHistory,
      education: props.education
    }

    console.log(formData)
    postFormDataToDatabase(formData.employmentHsitory)

    // if (props.employmentHistory) {
    //   props.employmentHistory.forEach((history) => {
    //     return postEmploymentHistoryToDatabase(history)
    //   })
    // }

    // if (props.oldEmploymentHistory) {
    //   props.oldEmploymentHistory.forEach((history) => {
    //     return postOldEmploymentHistoryToDatabase(history)
    //   })
    // }

    // if (props.education) {
    //   props.education.forEach((ed) => {
    //     return postEducationHistoryToDatabase(ed)
    //   })
    // }
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
    details: globalState.details,
    education: globalState.education,
    employmentHistory: globalState.employmentHistory,
    oldEmploymentHistory: globalState.oldEmploymentHistory
  }
}

export default connect(mapStateToProps)(Form)