import nock from 'nock'
import {
  postDetailsToDatabase,
  postEmploymentHistoryToDatabase,
  postOldEmploymentHistoryToDatabase,
  postEducationHistoryToDatabase,
  getDetails
} from './apiController'

describe('getDetails', () => {
  const mockDetails = { name: 'hero' }
  const scope = nock('http://localhost')
    .get('/api/v1')
    .reply(201, mockDetails)

  test('returns details from api', () => {
    expect.assertions(2)
    return getDetails()
      .then(res => {
        expect(res).toEqual(mockDetails)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('postDetailsToDatabse', () => {
  const mockName = 'test'
  const addedDetails = {
    id: 1,
    mockName,
    phone: '021',
    email: '@',
    profileIntro: 'hello'
  }

  const scope = nock('http://localhost')
    .post('/api/v1', mockName)
    .reply(201, addedDetails)

  test('posts details to api', () => {
    expect.assertions(2)

    return postDetailsToDatabase(mockName)
      .then((results) => {
        expect(results).toEqual(addedDetails)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('postEmploymentHistoryToDatabse', () => {
  const mockName = 'test'
  const addedDetails = {
    id: 1,
    mockName,
    phone: '021',
    email: '@',
    profileIntro: 'hello'
  }

  const scope = nock('http://localhost')
    .post('/api/v1/history', mockName)
    .reply(201, addedDetails)

  test('posts employment history to api', () => {
    expect.assertions(2)

    return postEmploymentHistoryToDatabase(mockName)
      .then((results) => {
        expect(results).toEqual(addedDetails)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('post old employment history to database', () => {
  const mockOldEmployer = 'old employer'
  const addedHistory = {
    id: 1,
    mockOldEmployer,
    oldEmploymentDate: 'date',
    oldRole: 'old role'
  }

  const scope = nock('http://localhost')
    .post('/api/v1/oldHistory', mockOldEmployer)
    .reply(201, addedHistory)

  test('posts old history to database', () => {
    expect.assertions(2)
    return postOldEmploymentHistoryToDatabase(mockOldEmployer)
      .then((results) => {
        expect(results).toEqual(addedHistory)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })

  describe('postEducationHistoryToDatabase', () => {
    const mockProvider = 'AUT'
    const addEducation = {
      mockProvider,
      qualification: 'Business',
      year: '2020'
    }

    const scope = nock('http://localhost')
      .post('/api/v1/education', mockProvider)
      .reply(201, addEducation)

    test('post education to api', () => {
      expect.assertions(2)

      return postEducationHistoryToDatabase(mockProvider)
        .then(res => {
          expect(scope.isDone()).toBe(true)
          expect(res).toEqual(addEducation)
        })
    })
  })
})
