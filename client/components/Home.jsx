import React from 'react'
import {Route} from 'react-router-dom'
import Form from './Form'
import Preview from './Preview'

export default function Home() {
  return (
    <div className='columns'>
      <div className='column is-half'>
        <p className="title">Please fill out the form below</p>
        <Route path='/' exact={true} component={Form} />
      </div>
      <div className='column is-half'>
        <p className="title">And your details will load here!</p>
        <Route path='/' exact={true} component={Preview} />
      </div>
    </div>
  )
}