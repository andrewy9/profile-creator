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

//test GET routes;
describe.skip('GET /api/v1/detailsRoutes', () => {
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
      const err = new Error('error')
      getDetails.mockImplementation(() => Promise.reject(err))
      return request(server).get('/api/v1/detailsRoutes')
        .then(res => {
          expect(res.status).toBe(500)
          //needs a .catch() in the actual route/server to work
          return null
        })
    })
  })
})

//test POST routes;
describe('POST api/v1/detailsRoutes', () => {
  describe('when database post works', () => {
    const fakeDetails = {
      name: 'name',
      phone: '021',
      email: '@',
      profileIntro: 'test'
    }

    beforeAll(() => {
      saveDetails.mockImplementation(() => Promise.resolve(fakeDetails))
      promiseRoutes = request(server)
        .post('/api/v1/detailsRoutes')
        .send({name: 'name', phone: '021'})
    })

    test('route gets connected', () => {
      expect.assertions(1)
      return promiseRoutes
      .then((res) => {
        expect(res.status).toBe(201)
        return null
      })
    })

    test('saveDetails gets called', () => {
      expect.assertions(1)
      return promiseRoutes
      .then((res) => {
        expect(saveDetails).toHaveBeenCalled()
        return null
      })
    })

    test('posts details to Database', () => {
      expect.assertions(2)
      return promiseRoutes
      .then((res) => {
        expect(saveDetails.mock.calls[0][0]).toBe('name')
        expect(saveDetails.mock.calls[0][1]).toBe('021')
      })
    })
    
    describe('when the database fails', () => {
      test('returns 500', () => {
        expect.assertions(1)
        const err = new Error('error')
        saveDetails.mockImplementation(() => Promise.reject(err))
        return request(server).post('/api/v1/detailsRoutes')
        .then(res => {
          expect(res.status).toBe(500)
          return null
        })
      })
    })
  })
})
