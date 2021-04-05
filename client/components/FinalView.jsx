import React, { useEffect, useState } from 'react'
import { getSavedData } from '../apis/apiController'
import { connect } from 'react-redux'

import FinalViewHome from './FinalViewHome'
import Resume from './Resume'
import Contact from './Contact'

function FinalView(props) {
  const [state, setState] = useState({
    data: {
      profile: [],
      employmentHistory: [],
      oldEmploymentHistory: [],
      educations: ['original']
    },
    selected: 'home'
  })
  console.log(state)


  useEffect(() => {
    getSavedData(props.user.id, props.match.params.profileName)
      .then(userData => {
        return setState({ ...state, data: userData })
      })
      .catch(err => console.log(err))
  }, [props.match.params.profileName])

  return (
    <section className="finalView section">
      <div className="container">

        {/* nav */}
        <div className='level'>
          <h1 className='title has-text-weight-bold'>{props.user.name}</h1>
          <a onClick={() => setState({ ...state, selected: 'home' })}>Home</a>
          <a onClick={() => setState({ ...state, selected: 'resume' })}>Resume</a>
          <a onClick={() => setState({ ...state, selected: 'contact' })}>Contact</a>
        </div>

        {/*body*/}
        <div className='columns'>

          {/* left colum */}
          <div className='column'>
            <figure className='image is 108x108'>
              <img className='is-rounded' src={props.user.image}></img>
            </figure>
          </div>

          {/* right column */}
          <div className='column'>
            {state.selected == 'home' && <FinalViewHome data={state.data} />}
            {state.selected == 'resume' && <Resume data={state.data} />}
            {state.selected == 'contact' && <Contact contact={state.data.profile} />}
          </div>

        </div>

        {/* footer */}
        <div className='footer '>
          {state.data.profile.map((el, idx) => {
            return <div key={idx} className='level'>
              <div>
                <p className='is-size-6'>Phone {" "}</p>
                <a className='is-size-6' href={`tel:${el.phone}`}>{el.phone}</a>
              </div>

              <div>
                <p className='is-size-6'>Email {" "}</p>
                <a className='is-size-6' href={`mailto:${el.email}`}>{el.email}</a>
              </div>

              <div>
                <p className='is-size-6'>Follow Me</p>
                <span className="icon">
                  <i className="fab fa-linkedin-in"></i>
                </span>
                <span className="icon">
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(FinalView)
