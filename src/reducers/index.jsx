import player from './player.jsx'
import operation from './operation.jsx'

export default function (state = {}, action) {
  return {
    player: player(state.player, action),
    operation: operation(state.operation, action),
  }
}

export const playerReducer = player
export const operationReducer = operation
