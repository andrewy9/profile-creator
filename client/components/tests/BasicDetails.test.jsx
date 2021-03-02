import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import BasicDetails from '../BasicDetails'
import { fetchFormDetails } from '../../actions'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

const fakeAction = { type: 'fakeAction' }
jest.mock('../../actions', () => ({
  fetchFormDetails: jest.fn(() => fakeAction)
}))

describe('<BasicDetails />', () => {
  let input
  beforeEach(() => {
    render(<Provider store={fakeStore}><BasicDetails /></Provider>)
    input = screen.getAllByRole('textbox')
    input.forEach((el, i) => {
      fireEvent.change(el, { target: {value: 'test' + i} })
      fireEvent.blur(el)
    })
  })
  test('submitting an input dispatches fetchFormDetails action', () => {
    expect(fakeStore.dispatch).toHaveBeenCalledWith(fakeAction)
    expect(fetchFormDetails).toHaveBeenCalledWith({"email": "test2", "name": "test0", "phone": "test1", "profileIntro": "test3"})
  })
})