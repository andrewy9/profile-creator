import {
  APPEND_SOCIAL, UPDATE_SOCIAL, REMOVE_SOCIAL,
  appendSocial, updateSocial, removeSocial
} from './socials' //types
import { setReducer } from './index' //actions

const mockDispatch = jest.fn()

describe('appendSocial', () => {
  describe('when the action works', () => {
    const mockDetails = {
      network: 'GitHub',
      link: 'https://github.com/andrewy9'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      appendSocial(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, APPEND_SOCIAL)
      expect(action.type).toBe(APPEND_SOCIAL)
    })

    test('dispatch setReducer actions via appendSocial', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(APPEND_SOCIAL)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.network).toEqual(mockDetails.network)
    })
  })
})

describe('updateSocial', () => {
  describe('when the action works', () => {
    const mockDetails = {
      network: 'GitHub',
      link: 'https://github.com/andrewy9'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      updateSocial(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, UPDATE_SOCIAL)
      expect(action.type).toBe(UPDATE_SOCIAL)
    })

    test('dispatch setReducer actions via appendSocial', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(UPDATE_SOCIAL)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.link).toEqual(mockDetails.link)
    })
  })
})

describe('removeSocial', () => {
  describe('when the action works', () => {
    const mockDetails = 1

    beforeAll(() => {
      jest.clearAllMocks()
      removeSocial(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, REMOVE_SOCIAL)
      expect(action.type).toBe(REMOVE_SOCIAL)
    })

    test('dispatch setReducer actions via appendSocial', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(REMOVE_SOCIAL)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
    })
  })
})