import React, { Component } from 'react';
import Counter from './components/counter'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }
  increase(){
    this.setState({
      count: this.state.count+1
    })
  }
  decrease(){
    this.setState({
      count: this.state.count-1
    })
  }
  render(){
    return(
      <div>
        <p><Counter handler={this.increase} btnText='Increase'/></p>
        <p>{this.state.count}</p>
        <Counter handler={this.decrease} btnText='Decrease'/>
      </div>
    )
  }
}

export default App;
