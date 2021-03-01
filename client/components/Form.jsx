import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchFormDetails } from '../actions'
import { postDetailsToDatabase, postOldEmploymentHistoryToDatabase, postEmploymentHistoryToDatabase, postEducationHistoryToDatabase, getDetails } from '../apis/detailsApi'

import BasicDetails from './BasicDetails'
import EmploymentHistory from './EmploymentHistory'
import OldEmploymentHistory from './OldEmploymentHistory'
import Education from './Education'


function Form(props) {
  const handleSubmit = e => {
    e.preventDefault()
    const details = {
      name: props.details.name,
      phone: props.details.phone,
      email: props.details.email,
      profile_intro: props.details.profileIntro
    }
    postDetailsToDatabase(details)
    //  getDetails()

    props.employmentHistory.forEach((history) => {
      return postEmploymentHistoryToDatabase(history)
    })

    props.oldEmploymentHistory.forEach((history) => {
      return postOldEmploymentHistoryToDatabase(history)
    })

    props.education.forEach((ed) => {
      return postEducationHistoryToDatabase(ed)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <BasicDetails test={'test'} />
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
    oldEmploymentHistory: globalState.oldEmploymentHistory,
  }
}

export default connect(mapStateToProps)(Form)