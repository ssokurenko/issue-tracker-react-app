import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import '../node_modules/lin.css/dist/lin.css'
import './index.css'

import App from './App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
