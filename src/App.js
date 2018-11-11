import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faEnvelope,
  faKey,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'

import { AuthProvider } from './contexts/auth-context'

import Routes from './modules'

library.add(faEnvelope, faKey, faAngleDown)

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
