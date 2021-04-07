import {
  APPEND_OLD_EMPLOYMENT_HISTORY, UPDATE_OLD_EMPLOYMENT_HISTORY, REMOVE_OLD_EMPLOYMENT_HISTORY,
  appendOldEmploymentHistory, updateOldEmploymentHistory, removeOldEmploymentHistory
} from './oldEmploymentHistory'
import { setReducer } from './index'


const mockDispatch = jest.fn()

describe('appendOldEmploymentHistory', () => {
  describe('when the action works', () => {
    const mockDetails = {
      oldEmployer: 'Still Professor Oak',
      oldEmploymentDateStart: '1997',
      oldEmploymentDateEnd: 'Never',
      oldRole: 'Poke\'mon trainer',
    }

    beforeAll(() => {
      jest.clearAllMocks()
      appendOldEmploymentHistory(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, APPEND_OLD_EMPLOYMENT_HISTORY)
      expect(action.type).toBe(APPEND_OLD_EMPLOYMENT_HISTORY)
    })

    test('dispatch setReducer actions via appendOldEmploymentHistory', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(APPEND_OLD_EMPLOYMENT_HISTORY)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.oldEmployer).toEqual(mockDetails.oldEmployer)
    })
  })
})

describe('updateOldEmploymentHistory', () => {
  describe('when the action works', () => {
    const mockDetails = {
      oldEmployer: 'Still Professor Oak',
      oldEmploymentDateStart: '1997',
      oldEmploymentDateEnd: 'Never',
      oldRole: 'Poke\'mon trainer',
    }

    beforeAll(() => {
      jest.clearAllMocks()
      updateOldEmploymentHistory(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, UPDATE_OLD_EMPLOYMENT_HISTORY)
      expect(action.type).toBe(UPDATE_OLD_EMPLOYMENT_HISTORY)
    })

    test('dispatch setReducer actions via appendOldEmploymentHistory', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(UPDATE_OLD_EMPLOYMENT_HISTORY)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.provider).toEqual(mockDetails.provider)
    })
  })
})

describe('removeOldEmploymentHistory', () => {
  describe('when the action works', () => {
    const mockDetails = 1

    beforeAll(() => {
      jest.clearAllMocks()
      removeOldEmploymentHistory(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, REMOVE_OLD_EMPLOYMENT_HISTORY)
      expect(action.type).toBe(REMOVE_OLD_EMPLOYMENT_HISTORY)
    })

    test('dispatch setReducer actions via appendOldEmploymentHistory', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(REMOVE_OLD_EMPLOYMENT_HISTORY)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
    })
  })
})