import React, { Component } from 'react';
import Counter from './components/counter'
import {Link} from 'react-router'
import styles from './App.css'
class App extends Component {
  render(){
    return(
      <div>
      <div className='nav-header'>
        <Link to='/'>Home </Link>
        <Link to='/about'>About Us</Link>
      </div>

        <div id='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
