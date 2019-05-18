import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import React from 'react'
import { renderRoutes } from 'react-router-config'


// A Routes file is a good shared entry-point between client and server
import routes from './'

const Layout = () =>
  <div>
    <nav>
      <ul className="header-navbar">
        <li className="header-navbar-li">
          <Link className="header-navbar-link2" to="/">Home</Link>
        </li>
        <li className="header-navbar-li">
          <Link className="header-navbar-link2" to="/users">Users list</Link>
        </li>
      </ul>
    </nav> 
    <div className="container text-center">{renderRoutes(routes)}</div>
  </div>

export default Layout


// <Switch>
// {routes.map(route => <Route key={route.name} {...route} />)}
// </Switch>
