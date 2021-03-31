const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const {
  getDetails,
  saveDetails,
  saveEducationHistory,
  saveEmploymentHistory,
  saveOldEmploymentHistory,
  getUserDetails,
  getUserOldEmploymentHistory,
  getUserEducation
} = require('./dataBaseFunction')

beforeAll(() => connection.migrate.latest())
beforeEach(() => connection.seed.run())

describe('getDetails', () => {
  test('gets the details', () => {
    expect.assertions(1)
    return getDetails(connection)
      .then(result => {
        expect(result).toHaveLength(3)
        return null
      })
  })
})

describe('saveDetails', () => {
  test('saves the details to database', () => {
    expect.assertions(3)
    return saveDetails('name', 'phone', 'email', 'profileIntro', connection)
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
    expect.assertions(3)
    return saveEmploymentHistory('employer', 'employmentDate', 'role', 'details', connection)
      .then((newId) => {
        expect(newId).toEqual([4])
        return connection('employment_history').select()
          .then(result => {
            expect(result).toHaveLength(4)
            expect(result[3].employer).toEqual('employer')
          })
      })
  })
})

describe('saveOldEmploymentHistory', () => {
  test('save older employment history to database', () => {
    expect.assertions(3)
    return saveOldEmploymentHistory('oldEmployer', 'oldEmploymentDate', 'oldRole', connection)
      .then((newId) => {
        expect(newId).toEqual([4])
        return connection('old_employment_history').select()
          .then(result => {
            expect(result).toHaveLength(4)
            expect(result[3].oldEmployer).toEqual('oldEmployer')
          })
      })
  })
})

describe('saveEducationHistory', () => {
  test('save education history to database', () => {
    expect.assertions(3)
    return saveEducationHistory('provider', 'qualification', 'year', connection)
      .then((newId) => {
        expect(newId).toEqual([4])
        return connection('education').select()
          .then(result => {
            expect(result).toHaveLength(4)
            expect(result[3].provider).toEqual('provider')
          })
      })
  })
})

describe('getUserDetails', () => {
  test('returns the correct users details', () => {
    expect.assertions(2)
    return getUserDetails(1, connection)
      .then(userDetails => {
        expect(userDetails[0].userId).toBe(1)
        expect(userDetails).toHaveLength(2)
      })
  })
})

describe('getUserEmploymentHistory', () => {
  test('returns the correct user employment history', () => {
    expect.assertions(2)
    return getUserDetails(1, connection)
      .then(userEmploymentHistory => {
        expect(userEmploymentHistory[0].userId).toBe(1)
        expect(userEmploymentHistory).toHaveLength(2)
      })
  })
})

describe('getUserOldEmploymentHistory', () => {
  test('returns the correct user old employment history', () => {
    expect.assertions(2)
    return getUserOldEmploymentHistory(1, connection)
      .then((userOldEmploymentHistory) => {
        expect(userOldEmploymentHistory[0].userId).toBe(1)
        expect(userOldEmploymentHistory).toHaveLength(2)
      })
  })
})

describe('getUserEducation', () => {
  test('returns the correct user education history', () => {
    expect.assertions(2)
    return getUserEducation(1, connection)
      .then((userEducation) => {
        expect(userEducation[0].userId).toBe(1)
        expect(userEducation).toHaveLength(2)
      })
  })
})
