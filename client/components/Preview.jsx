import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function Preview(props) {
  const [state, setState] = useState({
    oldEmploymentHistory: [
      { hello: '' }
    ]
  })

  // useEffect(() => {
  //   console.log('useEffect')
  //   setState(props.details)
  // }, [])

  return (
    <div className='preview'>
      {console.log('rendered')}
      {console.log(props)}
      {console.log(state)}
      <p>{props.details.name}</p>
      <p>{props.details.phone}</p>
      <p>{props.details.email}</p>
      <p>{props.details.profileIntro}</p>
      {props.employmentHistory.map((history) => {
        return <div>
          <p>{history.employer}</p>
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