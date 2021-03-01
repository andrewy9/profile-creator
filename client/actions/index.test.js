import {
  SET_FORM_DETAILS, ADD_BASIC_DETAILS, SET_EMPLOYMENT_HISTORY, SET_OLD_EMPLOYMENT_HISTORY, SET_EDUCATION,
  setFormDetails, fetchFormDetails
} from './index'

const fakeDispatch = jest.fn()


describe('fetchFormDetails', () => {
  describe('when the action works', () => {
    const fakeDetails = {
      name: 'name',
      phone: '021',
      email: '@',
      profileIntro: 'test'
    }

    beforeAll(()=> {
      fetchFormDetails(fakeDetails)(fakeDispatch)
    })

    test('returns correct action', () => {
      const action = setFormDetails(fakeDetails)
      expect(action.type).toBe(SET_FORM_DETAILS)
      expect(action.details.name).toBe('name')
    })
    
    test('dispatch setFormDetails actions with new details', ()=> {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(SET_FORM_DETAILS)
      expect(fakeDispatch.mock.calls[0][0].details).toEqual(fakeDetails)
    })


  })
})