import 'babel-polyfill'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersListPage extends Component {
  state = {
    loader: false
  }
  componentDidUpdate() {
  }
  componentDidMount() {
    this.props.fetchUsers()
  }
  renderUsers = ()=>{
    return this.props.users.map(user=>{
      return <h5 key={user.id}>{user.name}</h5>
    })
  }
  render() {
    return (
      <div className="container pt-4">
      <Helmet>
        <title>My App</title>
        <meta property="og:title" content="My App" />
      </Helmet>
      <h1>Public Data</h1>
      {this.state.loader && <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />}
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