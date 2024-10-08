import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/index.jsx'
import * as playerActions from './actions/player.jsx'
import * as videoActions from './actions/video.jsx'

export default class Manager {
  constructor(store) {
    this.store =
      store ||
      configureStore({
        reducer: reducer,
      })

    this.video = null
    this.rootElement = null
  }

  getActions() {
    const manager = this
    const { dispatch } = this.store
    const actions = {
      ...playerActions,
      ...videoActions,
    }

    function bindActionCreator(actionCreator) {
      return function bindAction() {
        const action = actionCreator.apply(manager, arguments)
        if (typeof action !== 'undefined') {
          dispatch(action)
        }
      }
    }

    return Object.keys(actions)
      .filter((key) => typeof actions[key] === 'function')
      .reduce((boundActions, key) => {
        boundActions[key] = bindActionCreator(actions[key])
        return boundActions
      }, {})
  }

  getState() {
    return this.store.getState()
  }

  // subscribe state change
  subscribeToStateChange(listener, getState) {
    if (!getState) {
      getState = this.getState.bind(this)
    }

    let prevState = getState()

    const handleChange = () => {
      const state = getState()
      if (state === prevState) {
        return
      }
      const prevStateCopy = prevState
      prevState = state
      listener(state, prevStateCopy)
    }

    return this.store.subscribe(handleChange)
  }

  // subscribe to operation state change
  subscribeToOperationStateChange(listener) {
    return this.subscribeToStateChange(
      listener,
      () => this.getState().operation,
    )
  }

  // subscribe to player state change
  subscribeToPlayerStateChange(listener) {
    return this.subscribeToStateChange(listener, () => this.getState().player)
  }
}
