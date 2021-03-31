import reducer from '../oldEmploymentHistory'
import { setOldEmploymentHistory } from '../../actions'

describe('oldEmployment reducer', () => {
  test('initial state is an empty array', () => {
    const state = reducer(undefined, { type: '_INIT_' })
    expect(state).toEqual([])
  })
  test('SET_OLD_EMPLOYMENT_HISTORY overwrites old employment history to state', () => {
    const fakeOldEmploymentHistory = [{ oldEmployer: 'oldEmployer1', oldEmployer: 'oldEmployer2' }]
    const newOldEmploymentHistory = [{ oldEmployer: 'newOldEmployer1' }, { oldEmployer: 'newOldEmployer2' }]
    const action = setOldEmploymentHistory(newOldEmploymentHistory)
    const state = reducer(fakeOldEmploymentHistory, action)
    expect(state).toBe(newOldEmploymentHistory)
  })
})
