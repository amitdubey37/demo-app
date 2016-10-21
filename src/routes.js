import App from './App'
import Home from './components/Home'
import About from './components/About'
import UserList from './containers/userList'
import React from 'react'
import {Route,IndexRoute} from 'react-router'

export default(
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/users' component={UserList}/>
  </Route>
)
