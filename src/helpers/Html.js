import React from 'react'
import { renderToString } from 'react-dom/server'
import webConfig from '../../webConfig.json'
import Helmet from 'react-helmet'
import Layout from '../shared/routes/Layout'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import '../assets/css/style.css'
// import 'bootstrap/dist/css/bootstrap.css'
import serialize from 'serialize-javascript'

const Html = ({req, store, state}) => {
  const context = {}
  const App = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Layout />
      </StaticRouter>
    </Provider>
  )

  const content = renderToString(App)
  const helmet = Helmet.renderStatic()
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  
  return (
    <html lang="en" {...htmlAttrs}>
      <head dangerouslySetInnerHTML={{
        __html: `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="styles/main.css"/>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    `}}>
    
    </head>
      <body {...bodyAttrs}>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{__html:`window.__INITIAL_STATE__ = ${serialize(state)}`}}></script>
        <script src="bundle.js"></script>
      </body>
    </html>
  )

}

export default Html

