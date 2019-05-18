import express from 'express'
import cors from 'cors'
import { renderToStaticMarkup } from 'react-dom/server'
import React from 'react'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import routes from '../shared/routes'
import { Html, Store } from '../helpers'
const PORT = process.env.PORT || 3000
const app = express()

app.use('/api', proxy('https://react-ssr-api.herokuapp.com', {
  proxyRecOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'
  }
}))
// app.use(cors())
app.use(express.static('build/public'))

app.get('*',  async (req, res, next) => {
  const store = Store(req)
  const promises = matchRoutes(routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null
  })

  await Promise.all(promises).then(()=> {
    const initialState= store.getState()
    const html = <Html req={req} store={store} state={initialState} />
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`)
  })
  
})

app.listen(PORT, (req, res) => {
  console.log(`APP IS RUNNING ON PORT ${PORT}`)
})

