import React, { Component } from 'react';
import Counter from './components/counter'
import {Link} from 'react-router'
import styles from './App.css'
import {connect} from 'react-redux'
import {increment, decrement} from './actions'
class App extends Component {
  render(){
    let {count,handleClick,increaseCount,decreaseCount} = this.props
    return(
      <div>
        <div className='nav-header'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
        </div>
        <div>
          {this.props.children}
          <div id='counter'>
          <div>
            <Counter btnText='Increase' handler={increaseCount}/>
              {count}
            <Counter btnText='Decrease' handler={decreaseCount}/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return state.counter;
}
const mapDispatchToProps = (dispatch) =>({
  increaseCount(){
   dispatch({type:"INCREMENT"})
 },
  decreaseCount(){
    dispatch({type:'DECREMENT'})
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
