import {
  APPEND_EMPLOYMENT_HISTORY, UPDATE_EMPLOYMENT_HISTORY, REMOVE_EMPLOYMENT_HISTORY,
  appendEmploymentHistory, updateEmploymentHistory, removeEmploymentHistory
} from './employmentHistory'
import { setReducer } from './index'


const mockDispatch = jest.fn()

describe('appendEmploymentHistory', () => {
  describe('when the action works', () => {
    const mockDetails = {
      employer: 'Professor Oak',
      employmentDateStart: '1997',
      employmentDateEnd: 'Never',
      role: 'Poke\'mon trainer',
      details: 'Fill up the Poke\' dex and aim to be the very best, that no one ever was'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      appendEmploymentHistory(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, APPEND_EMPLOYMENT_HISTORY)
      expect(action.type).toBe(APPEND_EMPLOYMENT_HISTORY)
    })

    test('dispatch setReducer actions via appendEmploymentHistory', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(APPEND_EMPLOYMENT_HISTORY)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.employer).toEqual(mockDetails.employer)
    })
  })
})

describe('updateEmploymentHistory', () => {
  describe('when the action works', () => {
    const mockDetails = {
      employer: 'Professor Oak',
      employmentDateStart: '1997',
      employmentDateEnd: 'Never',
      role: 'Poke\'mon trainer',
      details: 'Fill up the Poke\' dex and aim to be the very best, that no one ever was'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      updateEmploymentHistory(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, UPDATE_EMPLOYMENT_HISTORY)
      expect(action.type).toBe(UPDATE_EMPLOYMENT_HISTORY)
    })

    test('dispatch setReducer actions via appendEmploymentHistory', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(UPDATE_EMPLOYMENT_HISTORY)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.provider).toEqual(mockDetails.provider)
    })
  })
})

describe('removeEmploymentHistory', () => {
  describe('when the action works', () => {
    const mockDetails = 1

    beforeAll(() => {
      jest.clearAllMocks()
      removeEmploymentHistory(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, REMOVE_EMPLOYMENT_HISTORY)
      expect(action.type).toBe(REMOVE_EMPLOYMENT_HISTORY)
    })

    test('dispatch setReducer actions via appendEmploymentHistory', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(REMOVE_EMPLOYMENT_HISTORY)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
    })
  })
})