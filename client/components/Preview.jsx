import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function Preview(props) {

  return (
    <div className='preview'>
      {console.log('rendered')}
      <p>{props.details.name}</p>
      <p>{props.details.phone}</p>
      <p>{props.details.email}</p>
      <p>{props.details.profileIntro}</p>
      {props.employmentHistory.map((history, idx) => {
        return <div key={idx}>
          <p>{history.employer}</p>
          <p>{history.employmentDate}</p>
          <p>{history.role}</p>
          <p>{history.details}</p>
        </div>
      })}
      {props.oldEmploymentHistory.map((history, idx) => {
        return <div key={idx}>
          <p>{history.oldEmployer}</p>
          <p>{history.oldEmploymentDate}</p>
          <p>{history.oldRole}</p>
        </div>
      })}
      {props.education.map((education, idx) => {
        return <div key={idx}>
          <p>{education.provider}</p>
          <p>{education.qualification}</p>
          <p>{education.year}</p>
        </div>
      })}
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

export default connect(mapStateToProps)(Preview)