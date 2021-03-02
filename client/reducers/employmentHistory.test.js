import reducer from './employmentHistory'
import {setEmploymentHistory} from '../actions'

describe('employmentHistory reducer', () => {
  test('initial state is an empty array', () => {
    const state = reducer(undefined, {type: '_INIT_'})
    expect(state).toEqual([])
  })

  test('SET_EMPLOYMENT_HISTORY overwrites form details to the state', () => {
    const initialEmploymentHistory = [{employer: 'employer1'}, {employer: 'employer2'}]
    const newEmploymentHistory = [{employer: 'employer3'}]
    const action = setEmploymentHistory(newEmploymentHistory)
    const state = reducer(initialEmploymentHistory, action)
    expect(state).toBe(newEmploymentHistory)
  })
})