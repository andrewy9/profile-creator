import reducer from './education'
import { setEducation } from '../actions'

describe('education reducer', () => {
  test('initial state is an empty array', () => {
    const state = reducer(undefined, {type: '_INIT_'})
    expect(state).toEqual([])
  })

  test('SET_EDUCATION overwrite education in the state', () => {
    const initialEducation = [{providor: 'providor 1'}, {providor: 'providor 2'}]
    const newEducation = [{providor: 'new providor 1'}, {providor: 'new provider 2'}]
    const action = setEducation(newEducation)
    const state = reducer(initialEducation, action)
    expect(state).toEqual(newEducation)
  })
})