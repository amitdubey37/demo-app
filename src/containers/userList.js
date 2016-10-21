import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import styles from './react-bootstrap-table-all.min.css'
import {fetchUserList} from '../actions/index'
class UserList extends Component{
  componentDidMount(){
    console.log(this.props);
    let {dispatch} = this.props
    dispatch(fetchUserList())
  }
  render(){
    let {users,isFetching} = this.props
    console.log(isFetching)
    function priceFormatter(cell, row){
      return '<img  ' + cell;
    }
    return(
      <div>
        {isFetching?'Loading....':''}
        <BootstrapTable data={users} striped={true} hover={true}>
          <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>User ID</TableHeaderColumn>
          <TableHeaderColumn dataField="first_name" dataSort={true}>First Name</TableHeaderColumn>
          <TableHeaderColumn dataField="last_name" dataSort={true}>Last Name</TableHeaderColumn>
          <TableHeaderColumn dataField="avatar" dataFormat={priceFormatter}>Profile Picture</TableHeaderColumn>
        </BootstrapTable>
      </div>

    )
  }
}
const mapStateToProps = (state)=>{
  let {isFetching,users} = state.users
  return{
    isFetching,
    users
  }
}

export default connect(mapStateToProps,null)(UserList)
