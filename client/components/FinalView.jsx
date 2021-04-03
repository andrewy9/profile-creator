import React, { useEffect, useState } from 'react'
import { getSavedData } from '../apis/apiController'
import { connect } from 'react-redux'

function FinalView(props) {
  const [state, setState] = useState({
    data: {
      profile: [],
      employmentHistory: [],
      oldEmploymentHistory: [],
      educations: ['original']
    },
    selected: 'details'
  })

  useEffect(() => {
    getSavedData(props.user.id, props.match.params.profileName)
      .then(data => {
        return setState({ data })
      })
      .catch(err => console.log(err))
  }, [props.match.params.profileName])

  return (
    <>
      <section className="section">
        <div className="container">


          <div className='columns'>

            <div className='column'>
              <h1>Hi, I'm {props.user.name}</h1>
              <figure className='image is 108x108'>
                <img className='is-rounded' src={props.user.image}></img>
              </figure>
            </div>

            <div className='column'>
              <button className='colored-cirle' onClick={() => setState({ ...state, selected: 'details' })}>
                About Me
      </button>
              <div className='details'>
                <h2>Details</h2>
                {state.data.profile.map((el, idx) => {
                  return <div key={idx}>
                    <p>{el.name}</p>
                    <p>Ph: {el.phone}</p>
                    <p>Email:{el.email}</p>
                    <div>
                      <h2>Intro</h2>
                      <p>{el.profileIntro}</p>
                    </div>
                  </div>
                })}
              </div>

              <h2>Education History</h2>
              {state.data.educations.map((el, idx) => {
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
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(FinalView)
