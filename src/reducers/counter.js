
import store from '../store/configureStore'
var initialState = {count:0}
var counter = function(state=initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count:state.count+1}
      break;
    case 'DECREMENT':
      return {count:state.count-1}
    default:
      return state

  }
}

export default counter
