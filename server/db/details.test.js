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

describe('saveDetails', () => {
  test('saves the details to database', () => {
    expect.assertions(3)
    const test = ['kate', '021', 'test@test.com', 'this is test']
    return saveDetails(test[0], test[1], test[2], test[3], connection)
      .then((newId) => {
        expect(newId).toEqual([4])
        return connection('details').select()
        .then(result => {
          expect(result).toHaveLength(4)
          expect(result[3].name).toEqual('kate')
          return null
        })
      })
  })
})