import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchFormDetails } from '../actions'


function Form(props) {
  const [state, setState] = useState({
    name: 'name',
    phone: 'phone',
    email: 'email',
    profileIntro: 'Profile Intro',

    employmentHistory: [
      {
        employer: '123',
        employmentDate: 'default employment date',
        role: 'default role',
        details: 'default details'
      }
    ],

    // oldEmployer: 'oldEmployer',
    // oldEmploymentDate: 'oldEmploymentDate',
    // oldRole: 'oldRole'
  })

  const dispatchHandler = () => {
    props.dispatch(fetchFormDetails(state))
  }

  const handleChange = (evt) => {
    const { name, value, id, className } = evt.target
    if (["employmentHistory"].includes(className)) {
      state.employmentHistory[id][name] = value
      setState({ ...state })
    } else {
      setState({ ...state, [name]: value })
    }
  }

  const addMore = (e) => {
    setState({
      ...state,
      employmentHistory: [...state.employmentHistory, {
        employer: '',
        employmentDate: '',
        role: '',
        details: ''
      }]
    })
    e.preventDefault()
  }

  console.log('rendered state: ', state.employmentHistory)

  return (
    <div>
      {console.log('rendered state: ', state.employmentHistory)}
      <form>
        <div className='basicDetails'>
          <h3>Basic Details</h3>
          <label>Name:</label>
          <input type='text' name="name" id={0} value={state.name} onChange={handleChange} onBlur={dispatchHandler}></input>
          <label>Phone:</label>
          <input type='text' name="phone" id={1} value={state.phone} onChange={handleChange} onBlur={dispatchHandler}></input>
          <label>Email:</label>
          <input type='text' name="email" id={2} value={state.email} onChange={handleChange} onBlur={dispatchHandler}></input>
        </div>
        <h3>Employment History</h3>

        <div className='employmentHistory'>
          {
            state.employmentHistory.map((el, idx) => {
              return (
                <div key={idx}>
                  <label>Employer #{idx + 1}</label>
                  <input
                    type='text'
                    id={idx}
                    className="employmentHistory"
                    name='employer'
                    value={state.employmentHistory[idx].employer}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>

                  <label>Employment Date</label>
                  <input
                    type='text'
                    id={idx}
                    className="employmentHistory"
                    name="employmentDate"
                    value={state.employmentDate}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>

                  <label>Role</label>
                  <input
                    type='text'
                    id={idx}
                    className="employmentHistory"
                    name="role"
                    value={state.role}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>

                  <label>Details</label>
                  <input
                    type='text'
                    id={idx}
                    className="employmentHistory"
                    name="details"
                    value={state.details}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>
                </div>
              )
            })
          }
        </div >
        <button onClick={addMore}>Add More</button>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}


export default connect()(Form)

{/* 
  <div className='profileIntro'>
    <h3>Profile Intro</h3>
    <label>Profile Intro:</label>
    <input type='text' name="profileIntro" value={state.profileIntro} onChange={handleChange} onBlur={dispatchHandler}></input>
   </div>

  <div className='olderEmploymentHistory'>
    <h3>Older Employment History</h3>
    <label>Employer:</label>
    <input type='text' name="oldEmployer" value={state.oldEmployer} onChange={handleChange} onBlur={dispatchHandler}></input>
    <label>Employment Date</label>
    <input type='text' name="oldEmploymentDate" value={state.oldEmploymentDate} onChange={handleChange} onBlur={dispatchHandler}></input>
    <label>Role:</label>
    <input type='text' name="oldRole" value={state.oldRole} onChange={handleChange} onBlur={dispatchHandler}></input>
  </div> 
*/}