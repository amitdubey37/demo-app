var initialState = {
  users:[{"id":1,"first_name":"george","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"first_name":"lucille","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"first_name":"oscar","last_name":"bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}],
  isFetching:false
}
var users = function(state=initialState, action) {
  switch (action.type) {
    case 'REQUEST_USERS':
      return {isFetching:true}
      break;
    case 'RECEIVE_USERS':
      return {isFetching:false}
    default:
      return state

  }
}
export default users
