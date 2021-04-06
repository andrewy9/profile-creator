import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { postImage } from '../apis/apiController'
import { addPicture } from '../actions'
import './styles.css'

function ProfileImage(props) {
  const supportedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']
  const [isSupported, setIsSupported] = useState(true);

  const handleFileUpload = (e) => {
    const imageForm = new FormData();
    const reader = new FileReader();
    const selectedImg = e.target.files[0]

    if (selectedImg && supportedTypes.includes(selectedImg.type)) {
      imageForm.append('image', selectedImg);
      reader.onloadend = () => {
        props.dispatch(addPicture({ image: imageForm, preview: reader.result }))
      }
      setIsSupported(true)
      return reader.readAsDataURL(selectedImg)
    }
    setIsSupported(false)
    return console.log("Error, image file type now supported")
  }


  return (
    <div>
      <label className="label">Upload Your Profile Image:</label>
      <div className="control">
        <input className='input is-small' type='file' name="profileImage" id={4} onChange={handleFileUpload}></input>
      </div>

      {isSupported ? null :
        <div style={{ color: 'red' }}>
          <p>Please select an image that is supported.</p>
        </div>}
    </div>
  );
}


function mapStateToProps(globalState) {
  return {
    profileImage: globalState.profile.profileImage
  }
}

export default connect(mapStateToProps)(ProfileImage)