import React from 'react'
// import '../utility/style.css'
import '../src/utility/style.css'
import store from './redux/store'
import { Provider, } from 'react-redux'
import AppRoutes from './routes'

const App = () => {

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}


export default App