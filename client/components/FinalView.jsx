import React, { useEffect } from 'react'
import { getSavedData } from '../apis/detailsApi'
import { connect } from 'react-redux'

function FinalView() {

  //state = {
  //profile: the one you have selected
  //}
  //List of profile_names for your specific id

  //when you click on one of the profile_names, it sets the state to that info

  //function gets the info uses the state to determine which profile is being searched for 



  useEffect(() => {
    getSavedData(1, 'profile1').then(res => console.log('getSavedData res: ', res))
    // console.log(getSavedData(1, 'profile1'))
  }, [])


  return (
    <div>
      <h1>hello</h1>
      <p>
        hihi
      </p>
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