import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../shared/reducers'

export default () => {
  const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))

  
  return store
}