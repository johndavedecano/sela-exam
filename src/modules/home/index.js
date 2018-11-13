import React, { Component, Fragment } from 'react'

import Header from './components/Header'
import SearchBar from './components/SearchBar'

class Home extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <Header />
        <SearchBar />
      </Fragment>
    )
  }
}

export default Home
