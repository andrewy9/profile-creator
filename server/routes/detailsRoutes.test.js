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
        return null
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
  // the routes/server should return with .json() after the res.status()
  //e.g .then(details => {res.status(201).json(details)
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
        .send(fakeDetails)
        return null
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
        return null
      })
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


describe('POST api/v1/detailsRoutes/history', () => {
  describe('when the database history post works', () => {
    const fakeDetails = {
      employer: 'name',
      employmentDate: 'date',
      role: 'role',
      details: 'details'
    }

    beforeAll(() => {
      saveEmploymentHistory.mockImplementation(() => Promise.resolve(fakeDetails))
      promiseRoutes = request(server)
      .post('/api/v1/detailsRoutes/history')
      .send(fakeDetails)
      return null
    })

    test('route gets connected', () => {
      expect.assertions(1)
      return promiseRoutes
      .then((res) => {
        expect(res.status).toBe(201)
        return null 
      })
    })
    test('saveEmploymentHistory get called', () => {
      expect.assertions(1)
      return promiseRoutes
      .then((res) => {
        expect(saveEmploymentHistory).toHaveBeenCalled()
        return null
      })
    })
    test('posts history details to database', () => {
      expect.assertions(2)
      return promiseRoutes
      .then((res) => {
        expect(saveEmploymentHistory.mock.calls[0][0]).toBe('name')
        expect(saveEmploymentHistory.mock.calls[0][2]).toBe('role')
        return null
      })
    })
  })
  describe('when the database connection fails', () => {
    test('returns 500', () => {
      expect.assertions(1)
      const err = new Error('error')
      saveEmploymentHistory.mockImplementation(() => Promise.reject(err))
      return request(server).post('/api/v1/detailsRoutes')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
    })
  })
})

describe('POST api/v1/detailsRoutes/oldHistory', () => {
  describe('when the database history post works', () => {
    const fakeDetails = {
      oldEmployer:'oldy',
      oldEmploymentDate:'oldyDate',
      oldRole:'oldyRole' 
    }
    
    beforeAll(()=> {
      saveOldEmploymentHistory.mockImplementation(()=> Promise.resolve(fakeDetails))
      promiseRoutes = request(server)
      .post('/api/v1/detailsRoutes/oldHistory') 
      .send(fakeDetails)
      return null
    })

    test('route is called', () => {
      expect.assertions(1)
      return promiseRoutes
        .then(res => {
          expect(res.status).toBe(201)
          return null
        })
    })

    test('saveOldEmploymentHistory has been called',() => {
      expect.assertions(1)
      return promiseRoutes
        .then(res => {
          expect(saveOldEmploymentHistory).toHaveBeenCalled()
          return null
        })
    })

    test('posts oldHistory details to database', () => {
      expect.assertions(2)
      return promiseRoutes
        .then(res => {
          expect(saveOldEmploymentHistory.mock.calls[0][0]).toBe('oldy')
          expect(saveOldEmploymentHistory.mock.calls[0][1]).toBe('oldyDate')
          return null
        })
    })
  })

    describe('when database connection fails', () => {
      test('returns 500', () => {
        expect.assertions(1)
        const err = new Error('error')
        saveOldEmploymentHistory.mockImplementation(()=> Promise.reject(err))
        return request(server)
          .post('/api/v1/detailsRoutes/oldHistory')
          .then(res => {
            expect(res.status).toBe(500)
            return null
          })
      })
    })
}) 

describe('/POST, api/v1/detailsRoutes/education', () => {
  describe('route works', () => {
    const fakeEducation = {
      provider: 'provider',
      qualification: 'qualification',
      year: 'year'
    }
    
  beforeAll(() => {
    saveEducationHistory.mockImplementation(() => Promise.resolve(fakeEducation))
    promiseRoutes = request(server)
    .post('/api/v1/detailsRoutes/education')
    .send(fakeEducation)
    return null
  })

  test('education route is called', () => {
    expect.assertions(1)
    return promiseRoutes
    .then(res => {
      expect(res.status).toBe(201)
      return null
    })
  })

  test('saveEducationHistory is called', () => {
    expect.assertions(1)
    return promiseRoutes
    .then(res => {
      expect(saveEducationHistory).toHaveBeenCalled()
      return null
    })
  })
  
  test('saveEducationHistory posts to database', () => {
    expect.assertions(2)
    return promiseRoutes
    .then(res => {
      expect(saveEducationHistory.mock.calls[0][0]).toBe('provider')
      expect(saveEducationHistory.mock.calls[0][1]).toBe('qualification')
      return null
      })
    })
  })

  describe('when connection to server fails', () => {
    test('returns 500', () => {
      expect.assertions(1)
      const err = new Error('error')
      saveEducationHistory.mockImplementation(() => Promise.reject(err))
      return request(server)
      .post('/api/v1/detailsRoutes/education')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
    })
  })
})