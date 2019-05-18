import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import React from 'react'
import { renderRoutes } from 'react-router-config'

// A Routes file is a good shared entry-point between client and server
import routes from './'

const Layout = () =>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users list</Link>
        </li>
      </ul>
    </nav> 
    <div>{renderRoutes(routes)}</div>
  </div>

export default Layout


// <Switch>
// {routes.map(route => <Route key={route.name} {...route} />)}
// </Switch>