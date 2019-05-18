import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({auth}) => {
  const authBtn = auth ? (
    <a className="header-navbar-link text-dark mx-3" href="/api/logout">Logout</a>
  ) : (
    <a className="header-navbar-link text-dark mx-3" href="/api/auth/google">Login</a>
  )
  return (
    <div>
      <Link className="logo-text" to="/">React SSR</Link>
      <div>
        <Link className="header-navbar-link text-dark mx-3" to="/users">Users</Link>
        <Link className="header-navbar-link text-dark mx-3" to="/admins">Admin</Link>
        {authBtn}
      </div>
    </div>
  )
}

function mapStateToProps({ auth }) {
  return {auth}
}

export default connect(mapStateToProps)(Header)