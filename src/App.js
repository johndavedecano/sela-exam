import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProvider } from './contexts/auth-context'
import Routes from './modules'

class App extends Component {
  render() {
    return (
      <Fragment>
        <AuthProvider>
          <Router>
            <Routes />
          </Router>
        </AuthProvider>
      </Fragment>
    )
  }
}

export default App
