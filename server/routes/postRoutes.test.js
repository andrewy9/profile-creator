// import request from 'supertest'
// import server from '../server'

// import {
//   saveDetails,
//   saveEducationHistory,
//   saveEmploymentHistory,
//   saveOldEmploymentHistory
// } from '../db/dbFunctions'

// jest.mock('../db/dbFunctions', () => ({
//   saveDetails: jest.fn(),
//   saveEducationHistory: jest.fn(),
//   saveEmploymentHistory: jest.fn(),
//   saveOldEmploymentHistory: jest.fn(),
// }))

// let promiseRoutes

// // test POST routes;

// describe('POST api/v1', () => {
//   // the routes/server should return with .json() after the res.status()
//   // e.g .then(details => {res.status(201).json(details)
//   describe('when database post works', () => {
//     const fakeDetails = {
//       name: 'name',
//       phone: '021',
//       email: '@',
//       profileIntro: 'test'
//     }

//     beforeAll(() => {
//       saveDetails.mockImplementation(() => Promise.resolve(fakeDetails))
//       promiseRoutes = request(server)
//         .post('/api/v1/post')
//         .send(fakeDetails)
//       return null
//     })

//     test('route gets connected', () => {
//       expect.assertions(1)
//       return promiseRoutes
//         .then((res) => {
//           expect(res.status).toBe(201)
//           return null
//         })
//     })

//     test('saveDetails gets called', () => {
//       expect.assertions(1)
//       return promiseRoutes
//         .then((res) => {
//           await expect(saveDetails).toHaveBeenCalled()
//           return null
//         })
//     })

//     test('posts details to Database', () => {
//       expect.assertions(2)
//       return promiseRoutes
//         .then((res) => {
//           expect(saveDetails.mock.calls[0][0]).toBe('name')
//           expect(saveDetails.mock.calls[0][1]).toBe('021')
//           return null
//         })
//     })
//   })

//   describe('when the database fails', () => {
//     test('returns 500', () => {
//       expect.assertions(1)
//       const err = new Error('error')
//       saveDetails.mockImplementation(() => Promise.reject(err))
//       return request(server).post('/api/v1')
//         .then(res => {
//           expect(res.status).toBe(500)
//           return null
//         })
//     })
//   })
// })

// describe('POST api/v1/history', () => {
//   describe('when the database history post works', () => {
//     const fakeDetails = {
//       employer: 'name',
//       employmentDate: 'date',
//       role: 'role',
//       details: 'details'
//     }

//     beforeAll(() => {
//       saveEmploymentHistory.mockImplementation(() => Promise.resolve(fakeDetails))
//       promiseRoutes = request(server)
//         .post('/api/v1/history')
//         .send(fakeDetails)
//       return null
//     })

//     test('route gets connected', () => {
//       expect.assertions(1)
//       return promiseRoutes
//         .then((res) => {
//           expect(res.status).toBe(201)
//           return null
//         })
//     })
//     test('saveEmploymentHistory get called', () => {
//       expect.assertions(1)
//       return promiseRoutes
//         .then((res) => {
//           expect(saveEmploymentHistory).toHaveBeenCalled()
//           return null
//         })
//     })
//     test('posts history details to database', () => {
//       expect.assertions(2)
//       return promiseRoutes
//         .then((res) => {
//           expect(saveEmploymentHistory.mock.calls[0][0]).toBe('name')
//           expect(saveEmploymentHistory.mock.calls[0][2]).toBe('role')
//           return null
//         })
//     })
//   })
//   describe('when the database connection fails', () => {
//     test('returns 500', () => {
//       expect.assertions(1)
//       const err = new Error('error')
//       saveEmploymentHistory.mockImplementation(() => Promise.reject(err))
//       return request(server).post('/api/v1')
//         .then(res => {
//           expect(res.status).toBe(500)
//           return null
//         })
//     })
//   })
// })

// describe('POST api/v1/oldHistory', () => {
//   describe('when the database history post works', () => {
//     const fakeDetails = {
//       oldEmployer: 'oldy',
//       oldEmploymentDate: 'oldyDate',
//       oldRole: 'oldyRole'
//     }

//     beforeAll(() => {
//       saveOldEmploymentHistory.mockImplementation(() => Promise.resolve(fakeDetails))
//       promiseRoutes = request(server)
//         .post('/api/v1/oldHistory')
//         .send(fakeDetails)
//       return null
//     })

//     test('route is called', () => {
//       expect.assertions(1)
//       return promiseRoutes
//         .then(res => {
//           expect(res.status).toBe(201)
//           return null
//         })
//     })

//     test('saveOldEmploymentHistory has been called', () => {
//       expect.assertions(1)
//       return promiseRoutes
//         .then(res => {
//           expect(saveOldEmploymentHistory).toHaveBeenCalled()
//           return null
//         })
//     })

//     test('posts oldHistory details to database', () => {
//       expect.assertions(2)
//       return promiseRoutes
//         .then(res => {
//           expect(saveOldEmploymentHistory.mock.calls[0][0]).toBe('oldy')
//           expect(saveOldEmploymentHistory.mock.calls[0][1]).toBe('oldyDate')
//           return null
//         })
//     })
//   })

//   describe('when database connection fails', () => {
//     test('returns 500', () => {
//       expect.assertions(1)
//       const err = new Error('error')
//       saveOldEmploymentHistory.mockImplementation(() => Promise.reject(err))
//       return request(server)
//         .post('/api/v1/oldHistory')
//         .then(res => {
//           expect(res.status).toBe(500)
//           return null
//         })
//     })
//   })
// })

// describe('/POST, api/v1/education', () => {
//   describe('route works', () => {
//     const fakeEducation = {
//       provider: 'provider',
//       qualification: 'qualification',
//       year: 'year'
//     }

//     beforeAll(() => {
//       saveEducationHistory.mockImplementation(() => Promise.resolve(fakeEducation))
//       promiseRoutes = request(server)
//         .post('/api/v1/education')
//         .send(fakeEducation)
//       return null
//     })

//     test('education route is called', () => {
//       expect.assertions(1)
//       return promiseRoutes
//         .then(res => {
//           expect(res.status).toBe(201)
//           return null
//         })
//     })

//     test('saveEducationHistory is called', () => {
//       expect.assertions(1)
//       return promiseRoutes
//         .then(res => {
//           expect(saveEducationHistory).toHaveBeenCalled()
//           return null
//         })
//     })

//     test('saveEducationHistory posts to database', () => {
//       expect.assertions(2)
//       return promiseRoutes
//         .then(res => {
//           expect(saveEducationHistory.mock.calls[0][0]).toBe('provider')
//           expect(saveEducationHistory.mock.calls[0][1]).toBe('qualification')
//           return null
//         })
//     })
//   })

//   describe('when connection to server fails', () => {
//     test('returns 500', () => {
//       expect.assertions(1)
//       const err = new Error('error')
//       saveEducationHistory.mockImplementation(() => Promise.reject(err))
//       return request(server)
//         .post('/api/v1/education')
//         .then(res => {
//           expect(res.status).toBe(500)
//           return null
//         })
//     })
//   })
// })

