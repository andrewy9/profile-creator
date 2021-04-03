import React from 'react'
import { connect } from 'react-redux'
import { updateProfile } from '../actions'
import ProfileImage from './ProfileImage'


function Profile(props) {
  const handleChange = (e) => {
    e.preventDefault()
    props.dispatch(updateProfile(e.target));
  }

  return (
    <div className='content'>
      <div className='profile'>
        <div className="content">
          <label className='label'>CV Profile Name: </label>
        </div>
        <div className="field-body block">
          <div className='field'>
            <div className='control'>
              <input className='input is-small is-hovered' type='text' name='profileName' value={props.profile.profileName} onChange={handleChange}></input>
            </div>
          </div>
        </div>

        <h3>Profile Details</h3>
        <label id="firstName" className="label">First Name:</label>
        <div className="control is-expanded">
          <input aria-labelledby="Name" className='input is-small' type='text' name="firstName" id={0} value={props.profile.firstName} onChange={handleChange}></input>
        </div>
        <label id="lastName" className="label">Last Name:</label>
        <div className="control is-expanded">
          <input aria-labelledby="Name" className='input is-small' type='text' name="lastName" id={0} value={props.profile.lastName} onChange={handleChange}></input>
        </div>
        <ProfileImage />
        <label className="label">Phone:</label>
        <div className="control">
          <input className='input is-small' type='text' name="phone" id={1} value={props.profile.phone} onChange={handleChange}></input>
        </div>
        <label className="label">Email:</label>
        <div className="control">
          <input className='input is-small' type='text' name="email" id={2} value={props.profile.email} onChange={handleChange}></input>
        </div>
        <label className="label">Location:</label>
        <div className="control">
          <input className='input is-small' type='text' name="location" id={3} value={props.profile.location} onChange={handleChange}></input>
        </div>
      </div >

      <div className='profileIntro'>
        <label className="label">Profile Intro:</label>
        <div className="control">
          <textarea className='textarea is-small' type='text' name="profileIntro" value={props.profile.profileIntro} onChange={handleChange}></textarea>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    profile: globalState.profile
  }
}

export default connect(mapStateToProps)(Profile)
