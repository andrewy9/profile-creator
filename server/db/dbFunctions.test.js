const knex = require('knex')
const config = require('./knexfile').test
const db = knex(config)


const {
  uploadImage, //need to learn to test for image
  getImage, //need to learn to test for image
  getUserProfile,
  getUserSocials,
  getUserSkills,
  getUserEmploymentHistory,
  getUserOldEmploymentHistory,
  getUserEducation,
  getProfiles,
  saveProfile,
  saveSocials,
  saveSkills,
  saveEmploymentHistory,
  saveOldEmploymentHistory,
  saveEducationHistory,
} = require('./dbFunctions')

beforeAll(() => db.migrate.latest())
beforeEach(() => db.seed.run())

describe('saveProfile', () => {
  test('saves the details to database', () => {
    const mock = {
      firstName: 'Harry',
      lastName: 'Potter',
      phone: '021 777 7777',
      email: 'voldemort4lyf@hogwartmail.com',
      location: 'London',
      profileIntro: 'The chosen one'
    }

    expect.assertions(4)
    return saveProfile(mock, '1', 'Harry', db)
      .then((newId) => {
        //seed data has 5 entries with incremented id
        expect(newId).toEqual([6])
        return db('profile').select()
          .then(result => {
            expect(result).toHaveLength(6)
            expect(result[5].firstName).toEqual(mock.firstName)
            expect(result[5].email).toEqual(mock.email)
            return null
          })
      })
  })
})

describe('saveSocials', () => {
  test('save the socials data to database', () => {
    const mock = {
      network: 'WizHub',
      link: 'https://wizhub.com/potter9',
    }

    expect.assertions(4)
    return saveSocials(mock, '1', 'Harry', db)
      .then((newId) => {
        expect(newId).toEqual([6])
        return db('socials').select()
          .then(result => {
            expect(result).toHaveLength(6)
            expect(result[5].network).toEqual(mock.network)
            expect(result[5].link).toEqual(mock.link)
          })
      })
  })
})

describe('saveSkills', () => {
  test('save the socials data to database', () => {
    const mock = {
      skill: 'Expecto Patronum'
    }

    expect.assertions(3)
    return saveSkills(mock, '1', 'Harry', db)
      .then((newId) => {
        expect(newId).toEqual([6])
        return db('skills').select()
          .then(result => {
            expect(result).toHaveLength(6)
            expect(result[5].skill).toEqual(mock.skill)
          })
      })
  })
})

describe('saveEmploymentHistory', () => {
  const mock = {
    employer: 'The Ministry of Magic',
    employmentDateStart: '07-07-2000',
    employmentDateEnd: '07-07-2007',
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
            expect(result[5].employer).toEqual(mock.employer)
            expect(result[5].role).toEqual(mock.role)
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
            expect(result[5].oldEmployer).toEqual(mock.oldEmployer)
          })
      })
  })
})

describe('saveEducationHistory', () => {
  const mock = {
    provider: 'Hogwarts',
    qaulification: 'Wizard',
    yearStart: '1991',
    yearEnd: '1997'
  }
  test('save education history to database', () => {
    expect.assertions(3)
    return saveEducationHistory(mock, '1', 'Harry', db)
      .then((newId) => {
        expect(newId).toEqual([6])
        return db('educations').select()
          .then(result => {
            expect(result).toHaveLength(6)
            expect(result[5].provider).toEqual(mock.provider)
          })
      })
  })
})

describe('getUserProfile', () => {
  test('returns the correct users details', () => {
    expect.assertions(2)
    return getUserProfile(1, 'KateProfile1', db)
      .then(userDetails => {
        expect(userDetails[0].userId).toBe(1)
        expect(userDetails).toHaveLength(1)
      })
  })
})

describe('getUserSocials', () => {
  test('returns the correct users socials', () => {
    expect.assertions(3)
    return getUserSocials(1, 'KateProfile1', db)
      .then(userSocial => {
        expect(userSocial[0].userId).toBe(1)
        expect(userSocial[1].link).toEqual('https://www.youtube.com/watch?v=oHg5SJYRHA0')
        expect(userSocial).toHaveLength(2)
      })
  })
})

describe('getUserSkills', () => {
  test('returns the correct users Skills', () => {
    expect.assertions(3)
    return getUserSkills(3, 'AndrewProfile1', db)
      .then(userSkill => {
        expect(userSkill[0].userId).toBe(3)
        expect(userSkill[0].skill).toEqual('Noding while reacting')
        expect(userSkill).toHaveLength(1)
      })
  })
})

describe('getUserEmploymentHistory', () => {
  test('returns the correct user employment history', () => {
    expect.assertions(3)
    return getUserEmploymentHistory(1, 'KateProfile2', db)
      .then(userEmploymentHistory => {
        expect(userEmploymentHistory[0].userId).toBe(1)
        expect(userEmploymentHistory[0].role).toBe('FullStack Developer2')
        expect(userEmploymentHistory).toHaveLength(1)
      })
  })
})

describe('getUserOldEmploymentHistory', () => {
  test('returns the correct user old employment history', () => {
    expect.assertions(3)
    return getUserOldEmploymentHistory(2, 'SarahProfile1', db)
      .then((userOldEmploymentHistory) => {
        expect(userOldEmploymentHistory[0].userId).toBe(2)
        expect(userOldEmploymentHistory[0].oldEmploymentDateStart).toBe('2016-07')
        expect(userOldEmploymentHistory).toHaveLength(1)
      })
  })
})

describe('getUserEducation', () => {
  test('returns the correct user education history', () => {
    expect.assertions(3)
    return getUserEducation(3, 'AndrewProfile1', db)
      .then((userEducation) => {
        expect(userEducation[0].userId).toBe(3)
        expect(userEducation[0].qualification).toBe('FullStack')
        expect(userEducation).toHaveLength(1)
      })
  })
})

describe('getUserEducation', () => {
  test('returns the correct user education history', () => {
    expect.assertions(3)
    return getProfiles(2, db)
      .then((profiles) => {
        expect(profiles[0].profileName).toBe('SarahProfile1')
        expect(profiles[1].profileName).toBe('SarahProfile2')
        expect(profiles).toHaveLength(2)
      })
  })
})