import {
  SET_FORM_DETAILS, ADD_BASIC_DETAILS, SET_EMPLOYMENT_HISTORY, SET_OLD_EMPLOYMENT_HISTORY, SET_EDUCATION, 
  setFormDetails, fetchFormDetails, fetchEducation, setEducation, fetchEmploymentHistory, setEmploymentHistory, fetchOldEmploymentHistory, setOldEmploymentHistory
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
      jest.clearAllMocks()
      fetchFormDetails(fakeDetails)(fakeDispatch)
    })

    test('returns correct action', () => {
      const action = setFormDetails(fakeDetails)
      expect(action.type).toBe(SET_FORM_DETAILS)
      expect(action.details.name).toBe('name')
    })
    
    test('dispatch setFormDetails actions via fetchFormDetails', ()=> {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(SET_FORM_DETAILS)
      expect(fakeDispatch.mock.calls[0][0].details).toEqual(fakeDetails)
    })
  })
})

describe('fetchEmploymentHistory', () => {
  describe('when the action works', () => {
    const fakeHistory = {
      id: 1,
      employer: 'employer',
      employmentDate: 'date',
      role: 'old role',
      details: 'details'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      fetchEmploymentHistory(fakeHistory)(fakeDispatch)
    })

    test('returns correct action', () => {
      const action = setEmploymentHistory(fakeHistory)
      expect(action.type).toBe(SET_EMPLOYMENT_HISTORY)
      expect(action.employmentHistory.employer).toBe('employer')
    })
    
    test('dispatch setEmploymentHistory actions via fetchEmploymentHistory', () => {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(SET_EMPLOYMENT_HISTORY)
      expect(fakeDispatch.mock.calls[0][0].employmentHistory).toEqual(fakeHistory)
    })

  })
})


describe('fetchOldEmploymentHistory', () => {
  describe('when the action works', () => {
    const fakeHistory = {
      id: 1,
      mockOldEmployer: 'employer',
      oldEmploymentDate: 'date',
      oldRole: 'old role'
    }

    beforeAll(() => {
      jest.clearAllMocks()
      fetchOldEmploymentHistory(fakeHistory)(fakeDispatch)
    })
    
    test('returns the correct action', () => {
      const action = setOldEmploymentHistory(fakeHistory)
      expect(action.type).toBe(SET_OLD_EMPLOYMENT_HISTORY)
      expect(action.oldEmploymentHistory.mockOldEmployer).toBe('employer')
    })

    test('dispatch setOldEmploymentHistory actions via fetchOldEmploymentHistory', () => {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(SET_OLD_EMPLOYMENT_HISTORY)
      expect(fakeDispatch.mock.calls[0][0].oldEmploymentHistory).toEqual(fakeHistory)
    })
  })
})


describe('fetchEducation', ()=> {
  describe('when action does work', () => {
    const fakeEducation = {
      provider: 'EDA',
      year: '1964'
    }
    
    beforeAll(()=> {
      jest.clearAllMocks()
      fetchEducation(fakeEducation)(fakeDispatch)
    })
    
    test('returns correction action', () => {
      const action = setEducation(fakeEducation)
      expect(action.education.year).toBe('1964')
      expect(action.type).toBe(SET_EDUCATION)
    })
  
    test('dispatch setEducation via fetchEducation', () => {
      expect(fakeDispatch.mock.calls[0][0].type).toEqual(SET_EDUCATION)
      expect(fakeDispatch.mock.calls[0][0].education).toEqual(fakeEducation)
    })
  })
})

