import React from 'react'
import { connect } from 'react-redux'
import { appendSocial, updateSocial, removeSocial } from '../actions/socials'

function Social(props) {
  const initialState = {
    network: '',
    networkAddress: ''
  }

  const handleChange = (e) => {
    e.preventDefault()
    props.dispatch(updateSocial(e.target));
  }

  const addMoreButton = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    props.dispatch(appendSocial({ ...initialState }))
  }

  const removeButton = (id) => {
    props.dispatch(removeSocial(id));
  }

  return (
    <div className='socials content'>
      {props.socials.length == 0 ?
        <div className="control">
          <button className='addSocial button is-small is-light button-spacer' type='button' onClick={addMoreButton}>Add Social</button>
        </div >
        : <div>
          <h3>Socials</h3>
          {
            props.socials.map((socials, idx) => {
              return (
                <div key={idx}>
                  <label className='label'>Network #{idx + 1}:</label>
                  <div className='control'>
                    <select
                      id={idx}
                      className="input is-small"
                      name="network"
                      value={socials.network}
                      onChange={handleChange}>
                      <option value="linkedIn">LinkedIn</option>
                      <option value="faceBook">FaceBook</option>
                      <option value="gitHub">GitHub</option>
                      <option value="instagram">Instagram</option>
                      <option value="other">Personal Site</option>
                    </select>
                  </div>
                  <label className='label'>Network Address:</label>
                  <div className='control'>
                    <input
                      type='text'
                      id={idx}
                      className="input is-small"
                      name="networkAddress"
                      value={socials.networkAddress}
                      onChange={handleChange}>
                    </input>
                  </div>
                  <div className="control">
                    <button type='button' className='removeSocial button is-small is-light button-spacer' onClick={() => removeButton(idx)}>Remove</button>
                  </div>
                </div>
              );
            })
          }
        </div>
      }
      {props.socials.length > 0 &&
        <div className="control">
          <button className='addSocial button is-small is-light button-spacer' type='button' onClick={addMoreButton}>Add More</button>
        </div >}
    </div >
  )
}

function mapPropsToState(gloablState) {
  return {
    socials: gloablState.socials
  }
}

export default connect(mapPropsToState)(Social)
