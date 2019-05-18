import React from 'react'
import { Header } from './Components'
import { renderRoutes } from 'react-router-config'

 function App({route}) {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  )
}

export default {
  component: App
}