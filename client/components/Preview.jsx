import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

function Preview (props) {
  const [state, setState] = useState({
    oldEmploymentHistory: [
      {hello:''}
    ]
  })
  
  useEffect(()=> {
    if(props.oldEmploymentHistory) {
      console.log(props.oldEmploymentHistory)
      setState({...state, oldEmploymentHistory: props.oldEmploymentHistory})
    }
  })

  return (
    <div className='preview'>
      {console.log('rendered')}
      {console.log(props.details.name)}
      {console.log(state)}
      <p>{props.details.name}</p>
      <p>{props.details.phone}</p>
      <p>{props.details.email}</p>
      <p>{props.details.profileIntro}</p>
      {/* {state.oldEmploymentHistory.oldEmploymentHistory.map((history) => {
        return <div>
        <p>{history.oldRole}</p>
        </div>
      })} */}
    </div>
  )
}

function mapStateToProps (globalState) {
    return {
      details: globalState.details,
      education: globalState.education.education,
      employmentHistory: globalState.employmentHistory.employmentHistory,
      oldEmploymentHistory: globalState.oldEmploymentHistory.oldEmploymentHistory,
    }
}

export default connect(mapStateToProps)(Preview)