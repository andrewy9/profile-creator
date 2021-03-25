import React, { useEffect, useState } from 'react'
import { getSavedData, getProfiles } from '../apis/detailsApi'
import { connect } from 'react-redux'

function FinalView(props) {
  const [state, setState] = useState({
    data: {
      details: [],
      employmentHistory: [],
      oldEmploymentHistory: [],
      education: ['original']
    },
    profile: [],
  })

// user id props.user.id
// profile name

  useEffect(() => {
    getProfiles(props.user.id)
      .then(profile => {
        console.log('profile data in FinalView:', profile)
        getSavedData(1, 'profile1')
          .then(data => {
            console.log('saved data in FinalView:', data)
            setState({data, profile})
          })

        // setState({...state, profile})
      })
  }, [])

  function selectProfile(e) {
    e.preventDefault()
  }

  return (
    <>
    <h1>Select your profile</h1>
      {state.profile.map((el,idx) => { 
        return <button key={idx} value={el.profile_name} onClick={selectProfile}>{el.profile_name}</button>
      })}

      <h2>Details</h2>
      {state.data.details.map((el, idx) => {
        return <div key={idx}>
          <p>{el.name}</p>
          <p>Ph: {el.phone}</p>
          <p>Email:{el.email}</p>
          <div>
            <h2>Intro</h2>
            <p>{el.profile_intro}</p>
          </div>
        </div>
      })}

      <h2>Education History</h2>
      {state.data.education.map((el, idx) => {
        return <div key={idx}>
          <div>
            <h4>Education Provider</h4>
            <p>{el.provider} - {el.year}</p>
          </div>
          <div>
            <h4>Qualification</h4>
            <p>{el.qualification}</p>
          </div>
        </div>
      })}
      <div>
        <h2>Employment History</h2>
        {state.data.employmentHistory.map((el, idx) => {
          return <div key={idx}>
            <h4>Employer</h4>
            <p>{el.employer} - {el.oldEmploymentDate}</p>
            <p>{el.role}</p>
            <p>{el.details}</p>
          </div>
        })}

        {state.data.oldEmploymentHistory.map((el, idx) => {
          return <div key={idx}>
            <h4>Previous Employer</h4>
            <p>{el.oldEmployer} - {el.oldEmploymentDate}</p>
            <p>{el.oldRole}</p>
          </div>
        })}
        <p>state should be rendered above</p>
      </div>

    </>
  )
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user,
    // details: globalState.details,
    // education: globalState.education,
    // employmentHistory: globalState.employmentHistory,
    // oldEmploymentHistory: globalState.oldEmploymentHistory
  }
}

export default connect(mapStateToProps)(FinalView)
// export default FinalView