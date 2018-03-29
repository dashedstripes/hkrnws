import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

import Article from './pages/Article'
import Layout from './pages/Layout'

import Feed from './components/Feed'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Feed} />
        <Route exact path="/articles/:article_id" component={Article} />
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)