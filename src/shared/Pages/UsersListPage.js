import 'babel-polyfill'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  renderUsers = ()=>{
    return this.props.users.map(user=>{
      return <h2 key={user.id}>{user.name}</h2>
    })
  }
  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return { users }
}

function loadData (store) {
 return store.dispatch(fetchUsers())
}

export default {
  component: connect(mapStateToProps, {fetchUsers})(UsersListPage),
  loadData
}