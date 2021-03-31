import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import OldEmploymentHistory from '../OldEmploymentHistory'
import { fetchOldEmploymentHistory } from '../../actions'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

const fakeAction = { type: 'fakeAction' }
jest.mock('../../actions', () => ({
  fetchOldEmploymentHistory: jest.fn(() => fakeAction)
}))

describe('<OldEmploymentHistory />', () => {
  let input

  beforeEach(() => {
    render(<Provider store={fakeStore}><OldEmploymentHistory /></Provider>)
  })

  test('submitting an input dispatches fetchOldEmploymentHistory action', () => {
    input = screen.getAllByRole('textbox')
    input.forEach((el) => {
      fireEvent.change(el, { target: { value: 'test' } })
      fireEvent.blur(el)
    })
    expect(fakeStore.dispatch).toHaveBeenCalledWith(fakeAction)
    expect(fetchOldEmploymentHistory).toHaveBeenCalledWith({ oldEmploymentHistory: [{ oldEmployer: 'test', oldEmploymentDate: 'test', oldRole: 'test' }] })
  })

  test('clicking add more button adds more input fields', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    input = screen.getAllByRole('textbox')
    expect(input).toHaveLength(6)
  })
})
