import React from 'react'
import { connect } from 'react-redux'

function Preview(props) {
  return (
    <>
      {props.details.firstName && <div>
        <div className="tile is-ancestor">
          <article className="tile is-child box">
            <div className='block'>
              <h2 className='title is-4'>{props.details.firstName} {props.details.lastName}</h2>
              {props.details.phone && <p>Phone: {props.details.phone}</p>}
              {props.details.email && <p> Email: {props.details.email}</p>}
            </div>
            <div className='block'>
              {props.details.profileIntro && <h3 className="subtitle is-4">About Me</h3>}
              <p>{props.details.profileIntro}</p>
            </div>

            <div className='block'>
              {props.employmentHistory[0].employer && <div>
                <h3 className="subtitle is-4">Employment History</h3>
                {props.employmentHistory.map((history, idx) => {
                  return <div key={idx} className='block'>
                    <p><strong>{history.employer}</strong></p>
                    <p>From: {history.employmentDateStart} To: {history.employmentDateEnd}</p>
                    <p>{history.role}</p>
                    <p>{history.details}</p>
                  </div>
                })}
              </div>}
            </div>

            <div className='block'>
              {props.oldEmploymentHistory[0].oldEmployer && <div>
                {props.oldEmploymentHistory.map((history, idx) => {
                  return <div key={idx} className='block'>
                    <p><strong>{history.oldEmployer}</strong></p>
                    <p>From: {history.oldEmploymentDateStart} To: {history.oldEmploymentDateEnd}</p>
                    <p>{history.oldRole}</p>
                  </div>
                })}
              </div>}
            </div>

            <div className='block'>
              {props.education[0].provider && <div>
                <h3 className="subtitle is-4">Education</h3>
                {props.education.map((education, idx) => {
                  return <div key={idx} className='block'>
                    <p><strong>{education.provider}</strong></p>
                    <p>{education.qualification}</p>
                    <p>{education.year}</p>
                  </div>
                })}
              </div>}
            </div>
          </article>
        </div>
      </div>}
    </>
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
