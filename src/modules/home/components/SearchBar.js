import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './SearchBar.module.scss'

export default class extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render() {
    return (
      <div className={styles['searchBar']}>
        <div className="row m-0">
          <div className="col-lg-4 col-md-12 p-0 m-0">
            <div className={styles['searchBar__left']}>
              Search Projects By Location
            </div>
          </div>
          <div className="col-lg-8 col-md-12 p-0 m-0">
            <div className={styles['searchBar__right']}>
              <div className={styles['searchBar__right__icon']}>
                <FontAwesomeIcon
                  icon="map-marker-alt"
                  size="lg"
                  color="#808080"
                />
              </div>
              <input
                type="search"
                defaultValue="Ikorodu, Lagos"
                className={styles['searchBar__right__search']}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
