import request from 'supertest'
import server from '../server'
import {
  getUserDetails,
  getUserEmploymentHistory,
  getUserOldEmploymentHistory,
  getUserEducation,
} from '../db/dbFunctions'

jest.mock('../db/dbFunctions', () => ({
  getUserDetails: jest.fn(),
  getUserEmploymentHistory: jest.fn(),
  getUserOldEmploymentHistory: jest.fn(),
  getUserEducation: jest.fn()
}))

let promiseRoutes

// test GET routes;
describe('GET /api/v1', () => {
  describe('when database call works', () => {
    const fakeData = {
      data: 'data',
      userId: 1
    }

    beforeAll(() => {
      getUserDetails.mockImplementation(() => Promise.resolve(fakeData))
      // var to hold the request to server, plus post & send
      promiseRoutes = request(server)
        .get('/api/v1/1/Kate Profile 1')
      return null
    })

    test('getUserDetails route gets connected', () => {
      expect.assertions(1)
      return promiseRoutes.then(res => {
        expect(res.status).toBe(200)
        return null
      })
    })

    test('calls getUserDetails', () => {
      expect.assertions(1)
      return promiseRoutes.then(() => {
        expect(getUserDetails).toHaveBeenCalled()
        return null
      })
    })

    test('returns details from database', () => {
      return promiseRoutes.then(response => {
        expect(response.body).toEqual(fakeData)
        return null
      })
    })
  })

  describe('when the database fails', () => {
    test('returns 500', () => {
      expect.assertions(1)
      const err = new Error('error')
      getUserDetails.mockImplementation(() => Promise.reject(err))
      return request(server).get('/api/v1/1')
        .then(res => {
          expect(res.status).toBe(500)
          // needs a .catch() in the actual route/server to work
          return null
        })
    })
  })
})

describe('GET /api/v1/history', () => {
  describe('when database call works', () => {
    const fakeData = {
      data: 'data',
      userId: 1
    }

    beforeAll(() => {
      getUserEmploymentHistory.mockImplementation(() => Promise.resolve(fakeData))
      // var to hold the request to server, plus post & send
      promiseRoutes = request(server)
        .get('/api/v1/history/1')
      return null
    })

    test('getUserEmploymentHistory route gets connected', () => {
      expect.assertions(1)
      return promiseRoutes.then(res => {
        expect(res.status).toBe(200)
        return null
      })
    })

    test('calls getUserEmploymentHistory', () => {
      expect.assertions(1)
      return promiseRoutes.then(() => {
        expect(getUserEmploymentHistory).toHaveBeenCalled()
        return null
      })
    })

    test('returns correct user employer history from database', () => {
      return promiseRoutes.then(response => {
        expect(response.body).toEqual(fakeData)
        return null
      })
    })
  })

  describe('when the database fails', () => {
    test('returns 500', () => {
      expect.assertions(1)
      const err = new Error('error')
      getUserEmploymentHistory.mockImplementation(() => Promise.reject(err))
      return request(server).get('/api/v1/history/1')
        .then(res => {
          expect(res.status).toBe(500)
          // needs a .catch() in the actual route/server to work
          return null
        })
    })
  })
})

describe('GET /api/v1/oldHistory', () => {
  describe('when database call works', () => {
    const fakeData = {
      oldEmployer: 'old',
      oldEmploymentDate: 'oldDate',
      oldRole: 'oldRole'
    }

    beforeAll(() => {
      getUserOldEmploymentHistory.mockImplementation(() => Promise.resolve(fakeData))
      promiseRoutes = request(server)
        .get('/api/v1/oldHistory/1')
      return null
    })

    test('getUserOldEmploymentHistory route gets connected', () => {
      expect.assertions(1)
      return promiseRoutes.then(res => {
        expect(res.status).toBe(200)
        return null
      })
    })

    test('getUserOldEmploymentHistory has been called', () => {
      expect.assertions(1)
      return promiseRoutes.then(res => {
        expect(getUserOldEmploymentHistory).toHaveBeenCalled()
      })
    })

    test('returns correct old employer history', () => {
      expect.assertions(1)
      return promiseRoutes.then(response => {
        expect(response.body).toEqual(fakeData)
      })
    })
  })

  describe('when databasecall is failing', () => {
    test('returns 500', () => {
      const err = new Error('error')
      getUserOldEmploymentHistory.mockImplementation(() => Promise.reject(err))
      return request(server).get('/api/v1/oldHistory/1')
        .then(response => {
          expect(response.status).toBe(500)
        })
    })
  })
})

describe('GET /api/v1/education', () => {
  describe('when database call works', () => {
    const fakeData = {
      provider: 'provider',
      qualification: 'qualification',
      year: 'year'
    }
    beforeAll(() => {
      getUserEducation.mockImplementation(() => Promise.resolve(fakeData))
      promiseRoutes = request(server)
        .get('/api/v1/education/1')
      return null
    })
    test('education route gets connected', () => {
      expect.assertions(1)
      return promiseRoutes.then(res => {
        expect(res.status).toBe(200)
        return null
      })
    })
    test('getUserEducation gets called', () => {
      expect.assertions(1)
      return promiseRoutes.then(res => {
        expect(getUserEducation).toHaveBeenCalled()
      })
    })
    test('returns correct education from the database', () => {
      expect.assertions(1)
      return promiseRoutes.then(res => {
        expect(res.body).toEqual(fakeData)
        return null
      })
    })
  })

  describe('database fails', () => {
    test('returns 500', () => {
      const err = new Error()
      getUserEducation.mockImplementation(() => Promise.reject(err))
      return request(server).get('/api/v1/education/1')
        .then(res => {
          expect(res.status).toBe(500)
          return null
        })
    })
  })
})

