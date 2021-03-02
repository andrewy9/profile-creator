import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import Education from '../Education'
import { fetchEducation } from '../../actions'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

const fakeAction = { type: 'fakeAction' }
jest.mock('../../actions', () => ({
  fetchEducation: jest.fn(() => fakeAction)
}))

describe('<Education />', () => {
  let input

  beforeEach(() => {
    render(<Provider store={fakeStore}><Education /></Provider>)
  })

  test('submitting an input dispatches fetchEducation action', () => {
    input = screen.getAllByRole('textbox')
    input.forEach((el) => {
      fireEvent.change(el, { target: { value: 'test' } })
      fireEvent.blur(el)
    })
    expect(fakeStore.dispatch).toHaveBeenCalledWith(fakeAction)
    expect(fetchEducation).toHaveBeenCalledWith({ education: [{ 'provider': 'test', 'qualification': 'test', 'year': 'test' }] })
  })

  test('clicking add more button adds more input fields', () => {
    let button = screen.getByRole('button')
    fireEvent.click(button)
    input = screen.getAllByRole('textbox')
    expect(input).toHaveLength(6)
  })
})