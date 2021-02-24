const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const { getDetails, saveDetails } = require('./details')

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