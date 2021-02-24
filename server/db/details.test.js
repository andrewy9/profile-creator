const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const { getDetails, saveDetails, saveEmploymentHistory } = require('./details')

beforeAll(() => connection.migrate.latest())
beforeEach(() => connection.seed.run())

describe('getDetails', () => {
  test('gets the details', () => {
    expect.assertions(1)
    return getDetails(connection)
    .then(result => {
      expect(result.length).toEqual(3)
      return null
    })
  })
})

describe('saveDetails', () => {
  test('saves the details to database', () => {
    expect.assertions(3)
    return saveDetails('name', 'phone', 'email', 'profile_intro', connection)
      .then((newId) => {
        expect(newId).toEqual([4])
        return connection('details').select()
        .then(result => {
          expect(result).toHaveLength(4)
          expect(result[3].name).toEqual('name')
          return null
        })
      })
  })
})

describe('saveEmploymentHistory', () => {
  test('save the employment history to database', () => {
    expect.assertions(1)
  return saveEmploymentHistory('employer', 'employmentDate', 'role', 'details', connection)
    .then((newId) => {
      expect(newId).toEqual([4])
      
    })
  })
})