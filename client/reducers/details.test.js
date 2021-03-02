import reducer from './details'
import {setFormDetails} from '../actions'

describe('details reducer', () => {
  test('initial state is an empty array', () => {
    const state = reducer(undefined, {type: '_INIT_'})
    expect(state).toEqual([])
  })

  test('SET_FORM_DETAILS adds form details to the state', () => {
    const initialDetails = [{name: 'John Doe'}, {name: 'Joane Doe'}]
    const fakeDetails = [{name: 'Joe Doe'}, {name: 'Joana Doe'}]
    const action = setFormDetails(fakeDetails)
    const state = reducer(undefined, action)

    expect(state).toHaveLength(2)
    expect(state).toEqual(fakeDetails)
  })
})