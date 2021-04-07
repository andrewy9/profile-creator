import {
  APPEND_EDUCATION, UPDATE_EDUCATION, REMOVE_EDUCATION,
  appendEducation, updateEducation, removeEducation
} from './educations' //types
import { setReducer } from './index' //actions

const mockDispatch = jest.fn()

describe('appendEducation', () => {
  describe('when the action works', () => {
    const mockDetails = {
      provider: 'Master Roshi',
      qualification: 'Hermit School Certification',
      yearStart: '1986',
      yearEnd: '1989'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      appendEducation(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, APPEND_EDUCATION)
      expect(action.type).toBe(APPEND_EDUCATION)
    })

    test('dispatch setReducer actions via appendEducation', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(APPEND_EDUCATION)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.provider).toEqual(mockDetails.provider)
    })
  })
})

describe('updateEducation', () => {
  describe('when the action works', () => {
    const mockDetails = {
      provider: 'King Kai',
      qualification: 'Tap on the back',
      yearStart: '1989',
      yearEnd: '1989'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      updateEducation(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, UPDATE_EDUCATION)
      expect(action.type).toBe(UPDATE_EDUCATION)
    })

    test('dispatch setReducer actions via appendEducation', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(UPDATE_EDUCATION)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.provider).toEqual(mockDetails.provider)
    })
  })
})

describe('removeEducation', () => {
  describe('when the action works', () => {
    const mockDetails = 1

    beforeAll(() => {
      jest.clearAllMocks()
      removeEducation(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, REMOVE_EDUCATION)
      expect(action.type).toBe(REMOVE_EDUCATION)
    })

    test('dispatch setReducer actions via appendEducation', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(REMOVE_EDUCATION)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
    })
  })
})