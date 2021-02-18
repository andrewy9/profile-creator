import React, { useState } from 'react'
import { connect } from 'react-redux'



function Form() {
  const [state, setState] = useState({
    name: 'name',
    phone: 'phone',
    email: 'email',

    profileIntro: 'Profile Intro',

    employer: 'Employment History',
    employmentDate: 'Employment Date',
    role: 'role',
    details: 'details',
    
    oldEmployer: 'oldEmployer',
    oldEmploymentDate: 'oldEmploymentDate',
    oldRole: 'oldRole'
  })

  const dispatchHandler = () => {
    props.dispatch(fetchFormDetails(state))
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })
  }

  return (
    <div>
      <form>
    <div className='basicDetails'>
      <h3>Basic Details</h3>
      <label>Name:</label>
      <input type='text' name="name" value={state.name} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Phone:</label>
      <input type='text' name="phone" value={state.phone} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Email:</label>
      <input type='text' name="email" value={state.email} onChange={handleChange} onBlur={dispatchHandler}></input>
    </div>
    
    <div className='profileIntro'>
      <h3>Profile Intro</h3>
      <label>Profile Intro:</label>
      <input type='text' name="profileIntro" value={state.profileIntro} onChange={handleChange} onBlur={dispatchHandler}></input>
    </div> 
     
    <div className='employmentHistory'>
      <h3>Employment History</h3>
      <label>Employer</label>
      <input type='text' name="employer" value={state.employer} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Employment Date</label>
      <input type='text' name="employmentDate" value={state.employmentDate} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Role</label>
      <input type='text' name="role" value={state.role} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Details</label>
      <input type='text' name="details" value={state.details} onChange={handleChange} onBlur={dispatchHandler}></input>
    </div >
    
    <div className='olderEmploymentHistory'>
      <h3>Older Employment History</h3>
      <label>Employer:</label>
      <input type='text' name="oldEmployer" value={state.oldEmployer} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Employment Date</label>
      <input type='text' name="oldEmploymentDate" value={state.oldEmploymentDate} onChange={handleChange} onBlur={dispatchHandler}></input>
      <label>Role:</label>
      <input type='text' name="oldRole" value={state.oldRole} onChange={handleChange} onBlur={dispatchHandler}></input>
    </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}


export default connect()(Form)