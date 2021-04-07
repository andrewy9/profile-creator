import {
  APPEND_SKILL, UPDATE_SKILL, REMOVE_SKILL,
  appendSkill, updateSkill, removeSkill
} from './skills' //types
import { setReducer } from './index' //actions

const mockDispatch = jest.fn()

describe('appendSkill', () => {
  describe('when the action works', () => {
    const mockDetails = {
      skill: "Reacting and Noding JS",
    }

    beforeAll(() => {
      jest.clearAllMocks()
      appendSkill(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, APPEND_SKILL)
      expect(action.type).toBe(APPEND_SKILL)
    })

    test('dispatch setReducer actions via appendSkill', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(APPEND_SKILL)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.provider).toEqual(mockDetails.provider)
    })
  })
})

describe('updateSkill', () => {
  describe('when the action works', () => {
    const mockDetails = {
      skill: "ReactJS and NodeJS",
    }

    beforeAll(() => {
      jest.clearAllMocks()
      updateSkill(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, UPDATE_SKILL)
      expect(action.type).toBe(UPDATE_SKILL)
    })

    test('dispatch setReducer actions via appendSkill', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(UPDATE_SKILL)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.provider).toEqual(mockDetails.provider)
    })
  })
})

describe('removeSkill', () => {
  describe('when the action works', () => {
    const mockDetails = 1

    beforeAll(() => {
      jest.clearAllMocks()
      removeSkill(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, REMOVE_SKILL)
      expect(action.type).toBe(REMOVE_SKILL)
    })

    test('dispatch setReducer actions via appendSkill', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(REMOVE_SKILL)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
    })
  })
})