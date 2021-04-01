import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSocial } from '../actions'
import { initialStates } from '../initialStates'

function Social(props) {
  const [state, setState] = useState(
    [initialStates.social]
  )

  useEffect(() => {
    if (state.length > 0) {
      return dispatchHandler(state)
    } return dispatchHandler([initialStates.social])
  })

  const dispatchHandler = (data) => {
    console.log('test')
    props.dispatch(fetchSocial(data))
  }

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value, id } = e.target
    state[id][name] = value
    setState([...state])
  }

  const addMore = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    setState(
      [...state, initialStates.social]
    )
  }

  const remove = (idx) => {
    let removed = [...state]
    removed.splice(idx, 1);
    setState(removed)
  }

  return (
    <div className='socials content'>
      {state.length == 0 ?
        <div className="control">
          <button className='addSocial button is-small is-light button-spacer' type='button' onClick={addMore}>Add Social</button>
        </div >
        : <div>
          <h3>Socials</h3>
          {
            state.map((social, idx) => {
              return (
                <div key={idx}>
                  <label className='label'>Network #{idx + 1}:</label>
                  <div className='control'>
                    <select
                      id={idx}
                      className="input is-small"
                      name="network"
                      value={social.network}
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
                      value={social.networkAddress}
                      onChange={handleChange}>
                    </input>
                  </div>
                  <div className="control">
                    <button type='button' className='removeSocial button is-small is-light button-spacer' onClick={() => remove(idx)}>Remove</button>
                  </div>
                </div>
              )
            })}
        </div>
      }
      {state.length > 0 &&
        <div className="control">
          <button className='addOldEmploymentHistory button is-small is-light button-spacer' type='button' onClick={addMore}>Add More</button>
        </div >}
    </div >
  )
}
export default connect()(Social)
