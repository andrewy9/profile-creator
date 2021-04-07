import {
  SET_PROFILE, LOG_IN, LOG_OUT, UPDATE_PROFILE_LIST, ADD_PICTURE,
  setReducer, updateProfile, addPicture, logIn, logOut, updateProfileList
} from './index' //types

const mockDispatch = jest.fn()

describe('updateProfile', () => {
  describe('when the action works', () => {
    const mockDetails = {
      profileName: 'The Chose One',
      firstName: 'Harry',
      lastName: 'Potter',
      profileImage: {
        image: null,
        preview: null
      },
      phone: 'Hedwig',
      email: 'voldemort4lyf@owlmail.com',
      location: 'London',
      profileIntro: 'I am not a four eye.',
    }
    beforeAll(() => {
      jest.clearAllMocks()
      updateProfile(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, SET_PROFILE)
      expect(action.type).toBe(SET_PROFILE)
    })

    test('dispatch setReducer actions via updateProfile', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(SET_PROFILE)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.network).toEqual(mockDetails.network)
      expect(mockDispatch.mock.calls[0][0].payload.profileImage.image).toBe(null)
    })
  })
})

describe('addPicture', () => {
  describe('when the action works', () => {
    const mockDetails = {
      image: 'testImage',
      preview: 'testImage preview'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      addPicture(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, ADD_PICTURE)
      expect(action.type).toBe(ADD_PICTURE)
    })

    test('dispatch setReducer actions via addPicture', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(ADD_PICTURE)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(mockDetails)
      expect(mockDispatch.mock.calls[0][0].payload.image).toEqual(mockDetails.image)
    })
  })
})
describe('logIn', () => {
  describe('when the action works', () => {
    const mockDetails = undefined

    beforeAll(() => {
      jest.clearAllMocks()
      logIn(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, LOG_IN)
      expect(action.type).toBe(LOG_IN)
    })

    test('dispatch setReducer actions via logIn', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(LOG_IN)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(undefined)
    })
  })
})

describe('logOut', () => {
  describe('when the action works', () => {
    const mockDetails = undefined

    beforeAll(() => {
      jest.clearAllMocks()
      logOut(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, LOG_OUT)
      expect(action.type).toBe(LOG_OUT)
    })

    test('dispatch setReducer actions via logOut', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(LOG_OUT)
      expect(mockDispatch.mock.calls[0][0].payload).toEqual(undefined)
    })
  })
})

describe('updateProfileList', () => {
  describe('when the action works', () => {
    const mockDetails = {
      profileName: 'The REAL Chose One',
      firstName: 'Hermione',
      lastName: 'Granger',
      profileImage: {
        image: null,
        preview: null
      },
      phone: 'Crookshanks',
      email: 'wingardiumLeviosa@owlmail.com',
      location: 'London',
      profileIntro: 'It\'s Levi-ohhh-s not Leviosaaa!',
    }


    beforeAll(() => {
      jest.clearAllMocks()
      updateProfileList(mockDetails)(mockDispatch)
    })

    test('returns correct action', () => {
      const action = setReducer(mockDetails, UPDATE_PROFILE_LIST)
      expect(action.type).toBe(UPDATE_PROFILE_LIST)
    })

    test('dispatch setReducer actions via updateProfileList', () => {
      expect(mockDispatch.mock.calls[0][0].type).toEqual(UPDATE_PROFILE_LIST)
      expect(mockDispatch.mock.calls[0][0].payload.profileIntro).toEqual(mockDetails.profileIntro)
    })
  })
})


