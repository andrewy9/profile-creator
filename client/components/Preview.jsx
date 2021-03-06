import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

function Preview(props) {
  return (
    <>
      {props.profile.profileName && props.profile.firstName && <div>
        <div className="is-ancestor">
          <article className="tile is-child box">
            <div className='block'>
              <h2 className='title is-4'>{props.profile.firstName} {props.profile.lastName}</h2>
              {props.profile.phone && <p>Phone: {props.profile.phone}</p>}
              {props.profile.email && <p> Email: {props.profile.email}</p>}
              {props.profile.location && <p> Location: {props.profile.location}</p>}
            </div>
            <div className='block'>
              {props.profile.profileIntro && <h3 className="subtitle is-4">About Me</h3>}
              <p>{props.profile.profileIntro}</p>
            </div>
          </article>

          {props.profileImagePreview &&
            <article className="tile is-vertical is-child box">
              <div className='block'>
                <h3 className="subtitle is-4">Profile Image Preview</h3>
                <div className='block'>
                  <div className="imgPreview"
                    style={{ background: props.profileImagePreview ? `url("${props.profileImagePreview}") no-repeat center/cover` : "#131313" }}>
                  </div>
                </div>
              </div>
            </article>}

          {props.socials[0] &&
            <article className="tile is-vertical is-child box">
              <div className='block'>
                <h3 className="subtitle is-4">Socials</h3>
                {props.socials.map((social, idx) => {
                  return <div key={idx} className='block'>
                    <p><strong>{social.network}</strong></p>
                    <p>{social.link}</p>
                  </div>
                })}
              </div>
            </article>}


          {props.skills[0] &&
            <article className="tile is-vertical is-child box">
              <div className='block'>
                <h3 className="subtitle is-4">Skills</h3>
                {props.skills.map((skill, idx) => {
                  return <div key={idx} className='block'>
                    <p><strong>{skill.skill}</strong></p>
                  </div>
                })}
              </div>
            </article>}

          {props.employmentHistory[0].employer &&
            <article className="tile is-vertical is-child box">
              <div className='block'>
                <h3 className="subtitle is-4">Employment History</h3>
                {props.employmentHistory.map((history, idx) => {
                  return <div key={idx} className='block'>
                    <p><strong>{history.employer}</strong></p>
                    <p>From: {history.employmentDateStart} To: {history.employmentDateEnd}</p>
                    <p>{history.role}</p>
                    <p>{history.details}</p>
                  </div>
                })}
              </div>
            </article>}

          {props.oldEmploymentHistory[0] &&
            <article className="tile is-vertical is-child box">
              <div className='block'>
                {props.oldEmploymentHistory.map((history, idx) => {
                  return <div key={idx} className='block'>
                    <p><strong>{history.oldEmployer}</strong></p>
                    <p>From: {history.oldEmploymentDateStart} To: {history.oldEmploymentDateEnd}</p>
                    <p>{history.oldRole}</p>
                  </div>
                })}
              </div>
            </article>}


          {props.educations[0].provider &&
            <article className="tile is-vertical is-child box">
              <div className='block'>
                <h3 className="subtitle is-4">Education</h3>
                {props.educations.map((educations, idx) => {
                  return <div key={idx} className='block'>
                    <p><strong>{educations.provider}</strong></p>
                    <p>{educations.qualification}</p>
                    <p>{educations.yearStart}</p>
                    <p>{educations.yearEnd}</p>
                  </div>
                })}
              </div>
            </article>}

        </div>
      </div>}
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    profile: globalState.profile,
    profileImagePreview: globalState.profile.profileImage.preview,
    socials: globalState.socials.social,
    skills: globalState.skills.skill,
    educations: globalState.educations.education,
    employmentHistory: globalState.employmentHistory.employment,
    oldEmploymentHistory: globalState.oldEmploymentHistory.oldEmployment
  }
}

export default connect(mapStateToProps)(Preview)
