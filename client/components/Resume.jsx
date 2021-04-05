import React, { useState } from 'react'

export default function Resume(props) {
  const [state, setState] = useState({
    selected: ''
  })

  return (
    <>
      <div className='block'>
        <h1 className='title'>Online Resume</h1>
      </div>
      <div className='columns'>
        <div className='column border'>
          <div className='level'>
            <button className='button is-small is-light' onClick={() => setState({ ...state, selected: 'profile' })}>
              Profile
              </button>
            <button className='button is-small is-light' onClick={() => setState({ ...state, selected: 'work' })}>
              Work
              </button>
            <button className='button is-small is-light' onClick={() => setState({ ...state, selected: 'education' })}>
              Education
              </button>
          </div>

          {
            state.selected == 'profile' && <div className='block'>
              <h4 className='title is-4'>Profile</h4>
              {props.data.profile.map((el, idx) => {
                return <div key={idx} id='scrolling'>
                  <p>{el.profileIntro}</p>
                </div>
              })}
            </div>
          }

          {
            state.selected == 'education' && <div id='scrolling'>
              <h4 className='title is-4'>Education History</h4>
              {props.data.educations.map((el, idx) => {
                return <div className='block' key={idx}>
                  <h5 className='has-text-weight-bold'>Education Provider</h5>
                  <p>{el.provider} - {el.year}</p>
                  <h5 className='has-text-weight-bold'>Qualification</h5>
                  <p>{el.qualification}</p>
                </div>
              })}
            </div>
          }

          {
            state.selected == 'work' && <div id='scrolling'>
              <h4 className='title is-4'>Recent Employment History</h4>
              {props.data.employmentHistory.map((el, idx) => {
                return <div key={idx} className='block'>
                  <h5 className='has-text-weight-bold'>Employer</h5>
                  <p>{el.employer} - {el.oldEmploymentDate}</p>
                  <p>{el.role}</p>
                  <p>{el.details}</p>
                </div>
              })}

              {props.data.oldEmploymentHistory[0] && <h5 className='has-text-weight-bold'>Previous Employment History</h5>}
              {props.data.oldEmploymentHistory.map((el, idx) => {
                return <div key={idx} className='block'>
                  <p>{el.oldEmployer} - {el.oldEmploymentDate}</p>
                  <p>{el.oldRole}</p>
                </div>
              })}
            </div>
          }
        </div>
      </div>
    </>
  )
}