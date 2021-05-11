import React from 'react'
import { Route } from 'react-router-dom'
import Form from './Form'
import Preview from './Preview'

export default function UnauthenticatedHome() {
  return (
    <>
      <section>
        <div className="tile is-parent is-vertical ">
          <article className="tile is-child box">
            <div className='block has-text-centered'>
              <h1 className="title">Welcome to Profile Creator</h1>
              <p className='m-2'>Generate your own web cv! </p>
              <p className='m-2'>You can create multiple profiles for different situations. </p>
              <p className='m-2'>Please login with your google account to get started!</p>
              <p className='m-2'>This project was a joint effort between <a href='https://github.com/andrewy9'>andrewy9</a>, <a href='https://github.com/kate-baya'>Kate Baya</a>, and <a href='https://github.com/sarah-knowles'>Sarah Knowles</a>.</p>
              <p className='m-2'>If you are interested in our code, please see the <a href='https://github.com/andrewy9/profile-creator'>GitHub repo.</a></p>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className="tile is-parent block has-text-centered">
          <article className="tile is-child box">
            <div>
              <h1 className="title">Published User Profiles</h1>
              <p>Feel free to share your own profile and check out others' profiles!</p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
