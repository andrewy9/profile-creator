import React from 'react'
import { connect } from 'react-redux'

function Preview (props) {
  return (
    <>
      {props.details.name && <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className='block'>
              <h2 className='title is-4'>{props.details.name}</h2>
              {props.details.phone && <p>Phone: {props.details.phone}</p>}
              {props.details.email && <p> Email: {props.details.email}</p>}
            </div>
            <div className='block'>
              {props.details.profileIntro && <h3 className="subtitle is-4">About Me</h3>}
              <p>{props.details.profileIntro}</p>
            </div>
            <div className='block'>
              {props.employmentHistory[0].employer && <h3 className="subtitle is-4">Employment History</h3>}
              {props.employmentHistory.map((history, idx) => {
                return <div key={idx} className='block'>
                  <p><strong>{history.employer}</strong></p>
                  <p>{history.employmentDate}</p>
                  <p>{history.role}</p>
                  <p>{history.details}</p>
                </div>
              })}
            </div>
            <div className='block'>
              {props.oldEmploymentHistory.map((history, idx) => {
                return <div key={idx} className='block'>
                  <p><strong>{history.oldEmployer}</strong></p>
                  <p>{history.oldEmploymentDate}</p>
                  <p>{history.oldRole}</p>
                </div>
              })}
            </div>
            <div className='block'>
              {props.education[0].provider && <h3 className="subtitle is-4">Education</h3>}
              {props.education.map((education, idx) => {
                return <div key={idx} className='block'>
                  <p><strong>{education.provider}</strong></p>
                  <p>{education.qualification}</p>
                  <p>{education.year}</p>
                </div>
              })}
            </div>
          </article>
        </div>
      </div>}
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    details: globalState.details,
    education: globalState.education,
    employmentHistory: globalState.employmentHistory,
    oldEmploymentHistory: globalState.oldEmploymentHistory
  }
}

export default connect(mapStateToProps)(Preview)
