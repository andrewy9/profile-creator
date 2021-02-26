import nock from 'nock'
import {
  postDetailsToDatabase,
  postEmploymentHistoryToDatabase,
  postOldEmploymentHistoryToDatabase,
  postEducationHistoryToDatabase,
  getDetails
} from './detailsApi'

describe('getDetails',() => {
  const mockDetails = {name: 'hero'}

  const scope = nock('http://localhost')
  .get('/api/v1/detailsRoutes')
  .reply(201, mockDetails)

  test('returns details from api', () =>{
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
    profile_intro: "hello"
  }

  const scope = nock('http://localhost')
    .post('/api/v1/detailsRoutes', mockName)
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