import React, { useEffect } from 'react'
import {getSavedData} from '../apis/detailsApi'

function FinalView () {

//state = {
  //profile: the one you have selected
//}
//List of profile_names for your specific id

//when you click on one of the profile_names, it sets the state to that info

//function gets the info uses the state to determine which profile is being searched for 

 

  const data = getSavedData()

  useEffect(() => {
    getSavedData()
    .then(res => setState({
      name: res.details.name,
      phone: props.details.phone,
      email: props.details.email,
      profile_intro: props.details.profileIntro,
      employmentHistory: res[1].map(el => el.employmentHistory),
      oldEmploymentHistory: props.oldEmploymentHistory,
      education: props.education
     
    }))
  })

  const state = [{details}, [{employmentHistory:'test1'}, {employmentHistory:'test2'}], [{old}], [{education}]]

  return (
    <div>
      <p>
        employment history:
        {state[1].map(el => {
          el.employmentHistory //tes1
        })}
      </p>
    </div>
  )
}

export default FinalView