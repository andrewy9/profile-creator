import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchFormDetails } from '../actions'
import { postDetailsToDatabase, postOldEmploymentHistoryToDatabase, postEmploymentHistoryToDatabase, getDetails } from '../apis/detailsApi'


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
    oldEmploymentHistory: [
      {
        oldEmployer: 'oldEmployer',
        oldEmploymentDate: 'oldEmploymentDate',
        oldRole: 'oldRole'
      }
    ]
  })

  const dispatchHandler = () => {
    props.dispatch(fetchFormDetails(state))
  }

  const handleChange = (evt) => {
    const { name, value, id, className } = evt.target
    if (["employmentHistory"].includes(className)) {
      state.employmentHistory[id][name] = value
      setState({ ...state })

    } else if (["oldEmploymentHistory"].includes(className)) {
      state.oldEmploymentHistory[id][name] = value
      setState({ ...state })
    }
    else {
      setState({ ...state, [name]: value })
    }
  }

  const addMore = (evt) => {
    if (evt.target.className === 'addEmploymentHistory') {
      setState({
        ...state,
        employmentHistory: [...state.employmentHistory, {
          employer: '',
          employmentDate: '',
          role: '',
          details: ''
        }]
      })
    } else if (evt.target.className === 'addOldEmploymentHistory') {
      setState({
        ...state,
        oldEmploymentHistory: [...state.oldEmploymentHistory, {
          oldEmployer: '',
          oldEmploymentDate: '',
          oldRole: ''
        }]
      })
    }
    evt.preventDefault()
  }

  const handleSubmit = e => {
    e.preventDefault()
    const details = {
      name: state.name,
      phone: state.phone,
      email: state.email,
      profile_intro: state.profileIntro
    }
    postDetailsToDatabase(details)
    //  getDetails()

    state.employmentHistory.forEach((history) => {
      return postEmploymentHistoryToDatabase(history)
    })

    state.oldEmploymentHistory.forEach((history) => {
      return postOldEmploymentHistoryToDatabase(history)
    })
  }

  return (
    <div>
      {console.log('rendered state: ', state)}
      <form onSubmit={handleSubmit}>
        <div className='basicDetails'>
          <h3>Basic Details</h3>
          <label>Name:</label>
          <input type='text' name="name" id={0} value={state.name} onChange={handleChange} onBlur={dispatchHandler}></input>
          <label>Phone:</label>
          <input type='text' name="phone" id={1} value={state.phone} onChange={handleChange} onBlur={dispatchHandler}></input>
          <label>Email:</label>
          <input type='text' name="email" id={2} value={state.email} onChange={handleChange} onBlur={dispatchHandler}></input>
        </div>

        <div className='profileIntro'>
          <h3>Profile Intro</h3>
          <label>Profile Intro:</label>
          <input type='text' name="profileIntro" value={state.profileIntro} onChange={handleChange} onBlur={dispatchHandler}></input>
        </div>

        <div className='employmentHistory'>
          <h3>Employment History</h3>
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
                    value={el.employer}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>

                  <label>Employment Date</label>
                  <input
                    type='text'
                    id={idx}
                    className="employmentHistory"
                    name="employmentDate"
                    value={el.employmentDate}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>

                  <label>Role</label>
                  <input
                    type='text'
                    id={idx}
                    className="employmentHistory"
                    name="role"
                    value={el.role}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>

                  <label>Details</label>
                  <input
                    type='text'
                    id={idx}
                    className="employmentHistory"
                    name="details"
                    value={el.details}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>
                </div>
              )
            })
          }
          <button className='addEmploymentHistory' onClick={addMore}>Add More</button>
        </div>

        <div className='oldEmploymentHistory'>
          <h3>Older Employment History</h3>
          {
            state.oldEmploymentHistory.map((el, idx) => {
              return (
                <div key={idx}>
                  <label>Employer #{idx}:</label>
                  <input
                    type='text'
                    id={idx}
                    className="oldEmploymentHistory"
                    name="oldEmployer"
                    value={el.oldEmployer}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>

                  <label>Employment Date</label>
                  <input
                    type='text'
                    id={idx}
                    className="oldEmploymentHistory"
                    name="oldEmploymentDate"
                    value={el.oldEmploymentDate}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>

                  <label>Role:</label>
                  <input
                    type='text'
                    id={idx}
                    className="oldEmploymentHistory"
                    name="oldRole"
                    value={el.oldRole}
                    onChange={handleChange}
                    onBlur={dispatchHandler}>
                  </input>
                </div>
              )
            })
          }
          <button className='addOldEmploymentHistory' onClick={addMore}>Add More</button>
        </div >
        <input id='submit' type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default connect()(Form)