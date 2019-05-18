import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import axios from 'axios'

import reducers from '../shared/reducers'
import Layout from '../shared/routes/Layout'

const api = axios.create({
  baseURL: '/api'
})
const initialState = window.__INITIAL_STATE__ 
delete window.__INITIAL_STATE__
const store = createStore(
  reducers, 
  initialState, 
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
  )


hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  ,document.getElementById('root')
)