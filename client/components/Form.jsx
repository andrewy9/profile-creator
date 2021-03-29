import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { postFormDataToDatabase, getDetails } from '../apis/detailsApi'

import BasicDetails from './BasicDetails'
import EmploymentHistory from './EmploymentHistory'
import OldEmploymentHistory from './OldEmploymentHistory'
import Education from './Education'

function Form(props) {
  const [state, setState] = useState({
    profileName: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    //set state = {new profile id, new profile name}
    const formData = {
      profile_name: state.profileName,
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

  const handleChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className="field">
      <form onSubmit={handleSubmit}>
        <div className="content">
          <label className='label'>CV Profile Name: </label>
        </div>
        <div className="field-body block">
          <div className='field'>
            <div className='control'>
              <input className='input is-small is-hovered' type='text' name='profileName' value={state.profileName} onChange={handleChange}></input>
            </div>
          </div>
        </div>
        <BasicDetails />
        <EmploymentHistory />
        <OldEmploymentHistory />
        <Education />
        <div className="control">
          <input className='button is-fullwidth is-small' id='submit' type='submit' value='Submit' />
        </div>
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