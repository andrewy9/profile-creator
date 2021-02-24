import request from 'supertest'
import server from '../server'
import {
  getDetails,
  saveDetails,
  saveEducationHistory,
  saveEmploymentHistory,
  saveOldEmploymentHistory
} from '../db/details'


jest.mock('../db/details', () => ({
  getDetails: jest.fn(),
  saveDetails: jest.fn(),
  saveEducationHistory: jest.fn(),
  saveEmploymentHistory: jest.fn(),
  saveOldEmploymentHistory: jest.fn()
}))

let promiseRoutes;

describe('GET /api/v1/detailsRoutes', () => {
  describe('when databse call works', () => {
    const fakeDetails = {
    name: 'name',
    phone: '021',
    email: '@',
    profileIntro: 'test'
  }

    beforeAll(() => {
      getDetails.mockImplementation(() => Promise.resolve(fakeDetails))
      //var to hold the request to server, plus post & send
      promiseRoutes = request(server)
        .get('/api/v1/detailsRoutes')
    })
    
    test('routes get connected', () => {
      expect.assertions(1)
      return promiseRoutes.then(res => {
        expect(res.status).toBe(200)
        return null
      })
    })
    test('calls getDetails', () => {
      expect.assertions(1)
      return promiseRoutes.then(() => {
        expect(getDetails).toHaveBeenCalled()
        return null
      })
    })
    test('returns details from database', () => {
      return promiseRoutes.then(response => {
        expect(response.body).toEqual(fakeDetails)
        return null
      })
    })
  })

  describe('when the database fails', () => {
    test('returns 500', () => {
      expect.assertions(1)
      const err = new Error('database error')
      getDetails.mockImplementation(() => Promise.reject(err))
      return request(server).get('/api/v1/detailsRoutes')
        .then(res => {
          console.log(res)
          expect(res.status).toBe(500)
            return null
      })
    })
  })
  
})

