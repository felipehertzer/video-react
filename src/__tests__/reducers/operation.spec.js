import deepFreeze from 'deep-freeze'
import operation from '../../reducers/operation.jsx'
import { OPERATE } from '../../actions/player.jsx'

describe('operation reducer', () => {
  it('should return the initial state', () => {
    // Expected initial state of the reducer
    const expectedInitialState = {
      count: 0,
      operation: {
        action: '',
        source: '',
      },
    }

    // Call the reducer with undefined state and an empty action
    expect(operation(undefined, {})).toEqual(expectedInitialState)
  })

  it('should increase the count by action', () => {
    // Initial state before the action
    const stateBefore = {
      count: 0,
      operation: {
        action: '',
        source: '',
      },
    }

    // Action to increment the count
    const action = {
      type: OPERATE,
      operation: {
        action: '',
        source: '',
      },
    }

    // Expected state after the action is applied
    const stateAfter = {
      count: 1,
      operation: {
        action: '',
        source: '',
      },
    }

    // Ensure the state and action are frozen for immutability
    deepFreeze(stateBefore)
    deepFreeze(action)

    // Check if the reducer produces the expected state
    expect(operation(stateBefore, action)).toEqual(stateAfter)
  })

  it('should increase the count by 100 when the action is called 100 times', () => {
    // Initial state before any action is applied
    const stateBefore = {
      count: 0,
      operation: {
        action: '',
        source: '',
      },
    }

    // Action that will be dispatched multiple times
    const action = {
      type: OPERATE,
      operation: {
        action: '',
        source: '',
      },
    }

    // Expected state after the action is applied 100 times
    const stateAfter = {
      count: 100,
      operation: {
        action: '',
        source: '',
      },
    }

    // Ensure the state and action are frozen for immutability
    deepFreeze(stateBefore)
    deepFreeze(action)

    // Apply the action 100 times
    let state = stateBefore
    for (let i = 0; i < 100; i++) {
      state = operation(state, action)
    }

    // Check if the reducer produces the expected state after 100 iterations
    expect(state).toEqual(stateAfter)
  })
})
