import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import EmploymentHistory from '../EmploymentHistory'
import { fetchEmploymentHistory } from '../../actions'
import { Statement } from 'sqlite3'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

const fakeAction = { type: 'fakeAction' }
jest.mock('../../actions', () => ({
  fetchEmploymentHistory: jest.fn(() => fakeAction)
}))

describe('<EmploymentHistory />', () => {
  let input
  let button
  describe('input feilds correctly working', () => {

    beforeEach(() => {
      render(<Provider store={fakeStore}><EmploymentHistory /></Provider>)
      input = screen.getAllByRole('textbox')
      input.forEach((el) => {
        fireEvent.change(el, { target: { value: 'test' } })
        fireEvent.blur(el)
      })

      button = screen.getByRole('button')
      fireEvent.click(button)
      input = screen.getAllByRole('textbox')
    })

    test('submitting an input dispatches fetchEmploymentHistory action', () => {
      expect(fakeStore.dispatch).toHaveBeenCalledWith(fakeAction)
      expect(fetchEmploymentHistory).toHaveBeenCalledWith({ employmentHistory: [{ 'employer': 'test', 'employmentDate': 'test', 'role': 'test', 'details': 'test' }] })
    })

    test('clicking add more button adds more input fields', () => {
      expect(input).toHaveLength(8)
    })
  })
})