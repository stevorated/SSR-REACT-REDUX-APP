import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import { requireAuth } from '../Components'

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }
  renderAdmins() {
    return this.props.admins.map(admin=>{
      return <h4 key={admin.id}>{admin.name}</h4>
    })
  }
  render() {
    return (
      <div className="container mt-4">
        <h5>Protected list</h5>
        <div>
          {this.renderAdmins()}
        </div>    
      </div>
    )
  }
}

function mapStateToProps({admins}) {
  return { admins }
}

export default {
  component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}