import React, {Component} from 'react'

export default class Counter extends Component{
  render() {
    return (
      <div className="App">
        <button onClick={this.props.handler}>{this.props.btnText}</button>
      </div>
    );
  }
}
