import express from 'express'
import cors from 'cors'
// import { renderToStaticMarkup } from 'react-dom/server'
// import React from 'react'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import routes from '../shared/routes'
import { renderer, Store } from '../helpers'
const PORT = process.env.PORT || 3000
const app = express()

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);
// app.use(cors())
app.use(express.static('build/public'))

app.get('*',  async (req, res, next) => {
  const store = Store(req)

  const promises = matchRoutes(routes, req.path)
  .map(({route}) => {
    return route.loadData ? route.loadData(store) : null
  }).map(promise=>{
    if(promise) {
      return new Promise((resolve, rej) => {
        promise.then(resolve).catch(resolve)
      })
    }
  })
  
  await Promise.all(promises).then(()=> {
    const context = {}
    const initialState= store.getState()
    const html = renderer(req, store, initialState, context)
    if(context.url) {
      return res.redirect(301, context.url)
    }
    if(context.notFound) {
      res.status(404)
    }
    res.status(200).send(html)
  })  
})

app.listen(PORT, (req, res) => {
  console.log(`APP IS RUNNING ON PORT ${PORT}`)
})

