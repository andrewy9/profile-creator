import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { postDetailsToDatabase, postOldEmploymentHistoryToDatabase, postEmploymentHistoryToDatabase, postEducationHistoryToDatabase, getDetails } from '../../apis/apiController'

import Form from '../Form'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

const fakeAction = { type: 'fakeAction' }
jest.mock('../../actions', () => ({
  fetchOldEmploymentHistory: jest.fn(() => fakeAction),
  fetchEmploymentHistory: jest.fn(() => fakeAction),
  fetchEducation: jest.fn(() => fakeAction)
}))

jest.mock('../../apis/apiController', () => ({
  postDetailsToDatabase: jest.fn(),
  postOldEmploymentHistoryToDatabase: jest.fn(),
  postEmploymentHistoryToDatabase: jest.fn(),
  postEducationHistoryToDatabase: jest.fn(),
  getDetails: jest.fn()
}))

fakeStore.getState.mockImplementation(() => ({
  details: {
    name: 'name',
    phone: '021',
    email: 'email',
    profileIntro: 'intro'
  },
  employmentHistory: [{
    employer: 'employer',
    employmentDate: 'date',
    role: 'role',
    details: 'dets'
  }],
  oldEmploymentHistory: [{
    oldEmployer: 'oldEmployer',
    oldEmploymentDate: 'oldDate',
    oldRole: 'oldRole'
  }],
  education: [{
    provider: 'provider',
    qualification: 'qualification',
    date: 'date'
  }]
}))

describe('<Form />', () => {
  let submit
  let input
  beforeAll(() => {
    render(<Provider store={fakeStore}><Form /></Provider>)
    submit = screen.getByText('Submit')
    fireEvent.click(submit)
  })

  test('postDetailsToDatabase gets called', () => {
    expect(postDetailsToDatabase).toHaveBeenCalled()
  })
})
