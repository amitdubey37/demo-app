import fetch from 'isomorphic-fetch'

export function fetchUserList() {
    return dispatch => {
        dispatch(requestUsers())
        return fetch(`http://reqres.in/api/users/`)
            .then(response => {
                if (response.status != 200) {
                    throw new Error("Fetch user request Could not be completed")
                }
                return response.json()
            }
        )
            .then(json => dispatch(receiveUsers(json.data)))
            .catch(error =>
                console.log(error)
                )
    }
}

function requestUsers(){
  return {
    type:'REQUEST_USERS',
    isFetching: true,
    users:[]
  }
}
function receiveUsers(users){
  return {
    type:'RECEIVE_USERS',
    isFetching: true,
    users
  }
}
