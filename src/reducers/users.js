var initialState = {
  users:[],
  isFetching:false
}
var users = function(state=initialState, action) {
  switch (action.type) {
    case 'REQUEST_USERS':
      return {isFetching:true,users:[]}
      break;
    case 'RECEIVE_USERS':
      return {
        users:action.users,
        isFetching:false
      }
    default:
      return state

  }
}
export default users
