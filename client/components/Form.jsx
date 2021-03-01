import React from 'react'
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

    props.details.employmentHistory.forEach((history) => {
      return postEmploymentHistoryToDatabase(history)
    })

    // props.details.oldEmploymentHistory.forEach((history) => {
    //   return postOldEmploymentHistoryToDatabase(history)
    // })

    // props.details.educationHistory.forEach((education) => {
    //   return postEducationHistoryToDatabase(education)
    // })
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
    details: globalState.details

  }
}

export default connect(mapStateToProps)(Form)