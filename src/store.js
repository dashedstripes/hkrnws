import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware = applyMiddleware(promise(), thunk)
const store = createStore(reducers, middleware)

store.subscribe(() => {
  // console.log(store.getState())
})

export default store