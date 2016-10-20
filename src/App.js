import React, { Component } from 'react';
import Counter from './components/counter'
import {Link} from 'react-router'
import styles from './App.css'
import {connect} from 'react-redux'

class App extends Component {
  render(){
    let {count} = this.props
    console.log(this.props)
    return(
      <div>
        <div>
          <Counter btnText='Increase'/>{count}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return state.counter;
}
export default connect(mapStateToProps,null)(App);
