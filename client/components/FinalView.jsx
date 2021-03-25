import React, { useEffect, useState } from 'react'
import { getSavedData, getEducation } from '../apis/detailsApi'
import { connect } from 'react-redux'

function FinalView() {
  const [state, setState] = useState({
    data: {
      details: {},
      employmentHistory: [],
      oldEmploymentHistory: [],
      education: ['original']
    }
    // education: []
  }, console.log('STATE SET'))
  console.log('state: ', state)

  //state = {
  //profile: the one you have selected
  //}
  //List of profile_names for your specific id

  //when you click on one of the profile_names, it sets the state to that info

  //function gets the info uses the state to determine which profile is being searched for 
  // const data = getSavedData(1, 'profile1')


  useEffect(() => {
    console.log('USE EFFECT')
    getSavedData(1, 'profile1')
      .then(res => {
        console.log(res)
        setState({ data: res })
      })
  }, [])

  return (
    <div>
      {console.log('just rendered')}
      <h1>hello</h1>
      {/* {console.log('after render', state.data.employmentHistory)}
      {console.log('after render', state.data.employmentHistory[0])} */}
      {console.log('after render', state.data.education[0])}
      {state.data.education.map((el, idx) => {
        return <p key={idx}>{el.qualification}</p>
      })}
      <p>state should be rendered above</p>
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

export default connect(mapStateToProps)(FinalView)