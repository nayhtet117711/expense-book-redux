import React, { Component } from "react"
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import thunk from "redux-thunk"

import reducers from './reducers'
import Pages from "./pages"

const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
