const knex = require('knex')
const config = require('./knexfile').test
const db = knex(config)

const {
  getUserProfile,
  getUserEmploymentHistory,
  getUserOldEmploymentHistory,
  getUserEducation,
  saveProfile,
  saveEmploymentHistory,
  saveOldEmploymentHistory,
  saveEducationHistory,
  getProfiles
} = require('./dbFunctions')

beforeAll(() => db.migrate.latest())
beforeEach(() => db.seed.run())

describe('saveProfile', () => {
  test('saves the details to database', () => {
    const mock = {
      name: 'Harry Potter',
      phone: '021 777 7777',
      email: 'voldemort4lyf@hogwartmail.com',
      profileIntro: 'the chosen one'
    }

    expect.assertions(4)
    return saveProfile(mock, '1', 'Harry', db)
      .then((newId) => {
        expect(newId).toEqual([6])
        return db('details').select()
          .then(result => {
            expect(result).toHaveLength(6)
            expect(result[5].name).toEqual('Harry Potter')
            expect(result[5].email).toEqual('voldemort4lyf@hogwartmail.com')
            return null
          })
      })
  })
})

describe('saveEmploymentHistory', () => {
  const mock = {
    employer: 'The Ministry of Magic',
    employmentDate: '07-07-2007',
    role: 'Auror',
    details: 'hunts down dark-magic users threatening the wizardry & witchery society'
  }
  test('save the employment history to database', () => {
    expect.assertions(4)
    return saveEmploymentHistory(mock, '1', 'Harry', db)
      .then((newId) => {
        expect(newId).toEqual([6])
        return db('employment_history').select()
          .then(result => {
            expect(result).toHaveLength(6)
            expect(result[5].employer).toEqual('The Ministry of Magic')
            expect(result[5].role).toEqual('Auror')
          })
      })
  })
})

describe('saveOldEmploymentHistory', () => {
  const mock = {
    oldEmployer: 'Quidditch',
    oldEmploymentDate: '1991',
    role: 'Seeker',
  }
  test('save older employment history to database', () => {
    expect.assertions(3)
    return saveOldEmploymentHistory(mock, '1', 'Harry', db)
      .then((newId) => {
        expect(newId).toEqual([6])
        return db('old_employment_history').select()
          .then(result => {
            expect(result).toHaveLength(6)
            expect(result[5].oldEmployer).toEqual('Quidditch')
          })
      })
  })
})

describe('saveEducationHistory', () => {
  const mock = {
    provider: 'Hogwarts',
    qaulification: 'Wizard',
    year: '1998',
  }
  test('save education history to database', () => {
    expect.assertions(3)
    return saveEducationHistory(mock, '1', 'Harry', db)
      .then((newId) => {
        expect(newId).toEqual([6])
        return db('education').select()
          .then(result => {
            expect(result).toHaveLength(6)
            expect(result[5].provider).toEqual('Hogwarts')
          })
      })
  })
})

describe('getUserProfile', () => {

  test('returns the correct users details', () => {
    expect.assertions(2)
    return getUserProfile(1, 'Kate Profile 1', db)
      .then(userDetails => {
        expect(userDetails[0].userId).toBe(1)
        expect(userDetails).toHaveLength(1)
      })
  })
})

describe('getUserEmploymentHistory', () => {
  test('returns the correct user employment history', () => {
    expect.assertions(2)
    return getUserProfile(1, 'Kate Profile 1', db)
      .then(userEmploymentHistory => {
        expect(userEmploymentHistory[0].userId).toBe(1)
        expect(userEmploymentHistory).toHaveLength(1)
      })
  })
})

describe('getUserOldEmploymentHistory', () => {
  test('returns the correct user old employment history', () => {
    expect.assertions(2)
    return getUserOldEmploymentHistory(2, 'Sarah Profile 1', db)
      .then((userOldEmploymentHistory) => {
        expect(userOldEmploymentHistory[0].userId).toBe(2)
        expect(userOldEmploymentHistory).toHaveLength(1)
      })
  })
})

describe('getUserEducation', () => {
  test('returns the correct user education history', () => {
    expect.assertions(2)
    return getUserEducation(3, 'Andrew Profile 1', db)
      .then((userEducation) => {
        expect(userEducation[0].userId).toBe(3)
        expect(userEducation).toHaveLength(1)
      })
  })
})

describe('getUserEducation', () => {
  test('returns the correct user education history', () => {
    expect.assertions(3)
    return getProfiles(2, db)
      .then((profiles) => {
        expect(profiles[0].profileName).toBe('Sarah Profile 1')
        expect(profiles[1].profileName).toBe('Sarah Profile 2')
        expect(profiles).toHaveLength(2)
      })
  })
})