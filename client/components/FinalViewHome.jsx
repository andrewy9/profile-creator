import React, { useState } from 'react'
import { connect } from 'react-redux'

function FinalViewHome(props) {
  return (
    <>
      <div className='block'>
        <h1 className='title'>Hello!</h1>
      </div>
      <div className='columns'>
        <div className='column border'>
          <p className='subtitle'>A bit about me:</p>
          <p>My name is {props.user.name}</p>
          <p>I am a //insert your qualification// </p>
          <p>Please check out my resume to learn more about me!</p>
          <p>Socals:</p>
        </div>
      </div>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(FinalViewHome)