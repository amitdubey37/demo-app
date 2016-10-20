
var initialState = {count:0}
var counter = function(state=initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return 1
      break;
    default:
      return state

  }
}

export default counter
