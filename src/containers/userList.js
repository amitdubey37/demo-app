import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import styles from './react-bootstrap-table-all.min.css'
var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }]
class UserList extends Component{
  render(){
    let {users} = this.props
    console.log(users)
    return(
      <BootstrapTable data={users} striped={true} hover={true}>
        <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="first_name" dataSort={true}>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField="last_name" dataSort={true}>Last Name</TableHeaderColumn>
        <TableHeaderColumn dataField="avatar">Profile Picture</TableHeaderColumn>
      </BootstrapTable>
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
