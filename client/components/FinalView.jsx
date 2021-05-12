import React, { useEffect, useState } from 'react'
import { getSavedData, getImage, postPublicUrlParams, getPublicUrlParam } from '../apis/apiController'
import { connect } from 'react-redux'

import FinalViewHome from './FinalViewHome'
import Resume from './Resume'
import Contact from './Contact'

function FinalView(props) {
  const [profileImage, setProfileImage] = useState({
    image: ''
  })
  const [state, setState] = useState({
    data: {
      profile: [],
      socials: [],
      skills: [],
      employmentHistory: [],
      oldEmploymentHistory: [],
      educations: ['original'],
    },
    selected: 'home'
  })
  const [showUrl, setShowUrl] = useState({
    display: false
  })

  useEffect(() => {
    if (props.match.path === '/publicView/:userId/:profileName') {
      const { userId, profileName } = props.publicView
      if (props.publicView.public) {
        retrieveImage(userId, profileName)
        retrieveSavedData(userId, profileName)
      }
    } else {
      retrieveImage(props.user.id, props.match.params.profileName)
      retrieveSavedData(props.user.id, props.match.params.profileName)
    }
  }, [props.match.params.profileName])

  //Retreives the profileImage data and stores it in the profileImage state
  const retrieveImage = (id, profileName) => {
    getImage(id, profileName)
      .then(data => {
        let base64Flag = 'data:image/jpeg;base64,';
        let imageString = arrayBufferToBase64(data.image.data);
        setProfileImage({ image: base64Flag + imageString })
      })
      .catch(err => console.log(err))
  }

  //Retreives the Profile Data from the server
  const retrieveSavedData = (id, profileName) => {
    console.log(id, profileName)
    getSavedData(id, profileName)
      .then(userData => {
        return setState({ ...state, data: userData })
      })
      .catch(err => console.log(err))
  }

  //button
  const generateUrl = (userId, profileName) => {
    postPublicUrlParams(userId, profileName)
    setShowUrl({ display: true })
  }

  //Converts bufferArray of the image to base64 string format
  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((el) => binary += String.fromCharCode(el));
    return window.btoa(binary);
  }

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
              {profileImage.image ? <img className='is-rounded' src={profileImage.image}></img>
                : <img className='is-rounded' src={"/images/default_avatar.jpg"}></img>}
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
                {state.data.socials.map((social, idx) => {
                  switch (social.network) {
                    case "LinkedIn":
                      return <span key={idx} className="icon">
                        <a href={social.link} target='_blank'>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </span>
                      break;
                    case "GitHub":
                      return <span key={idx} className="icon">
                        <a href={social.link} target='_blank'>
                          <i className="fab fa-github"></i>
                        </a>
                      </span>
                      break;
                    case "FaceBook":
                      return <span key={idx} className="icon">
                        <a href={social.link} target='_blank'>
                          <i className="fab fa-facebook"></i>
                        </a>
                      </span>
                      break;
                    case "Twitter":
                      return <span key={idx} className="icon">
                        <a href={social.link} target='_blank'>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </span>
                      break;
                    case "Instagram":
                      return <span key={idx} className="icon">
                        <a href={social.link} target='_blank'>
                          <i className="fab fa-instagram"></i>
                        </a>
                      </span>
                      break;
                    case "Personal Page":
                      return <span key={idx} className="icon">
                        <a href={social.link} target='_blank'>
                          <i className="fas fa-globe"></i>
                        </a>
                      </span>
                      break;
                    default:
                      return null
                  }
                })}
              </div>
            </div>
          })}
          {props.match.path === "/finalView/:profileName" ??
            <button onClick={() => generateUrl(props.user.id, props.match.params.profileName)}>
              Generate URL
              </button>
          }
          {showUrl.display && <div>
            <p>
              http://localhost:3000/#/publicView/{props.user.id}/{props.match.params.profileName}
            </p>
          </div>}
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
