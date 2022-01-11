import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import reducer from './store'
import { Provider } from 'react-redux'

//reducer 를 export 해야 가져올수있음
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
