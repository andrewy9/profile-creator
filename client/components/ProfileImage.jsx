import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addPicture } from '../actions'
import './styles.css'

function ProfileImage(props) {
  const handleFileUpload = (e) => {
    const selectedImg = e.target.files[0]
    let reader = new FileReader();
    reader.onloadend = () => {
      props.dispatch(addPicture({ image: selectedImg, preview: reader.result }))
    }
    reader.readAsDataURL(selectedImg)
  }

  return (
    <div>
      <label className="label">Upload Your Profile Image:</label>
      <div className="control">
        <input className='input is-small' type='file' name="profileImage" id={4} onChange={handleFileUpload}></input>
      </div>

      <div className="imgPreview"
        style={{ background: props.profileImage.preview ? `url("${props.profileImage.preview}") no-repeat center/cover` : "#131313" }}>
      </div>
    </div>
  );
}


function mapStateToProps(globalState) {
  return {
    profileImage: globalState.profile.profileImage
  }
}

export default connect(mapStateToProps)(ProfileImage)