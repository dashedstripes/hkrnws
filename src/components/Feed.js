import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Feed extends Component {
  render() {
    if (this.props.pending) {
      return (
        <div class='row p-tb-2'>
          <div class='col-12 t-c'>
            <h3>Loading Articles...</h3>
          </div>
        </div>
      )
    }

    if (this.props.rejected) {
      return (
        <div class='row p-tb-2'>
          <div class='col-12 t-c'>
            <p class='c-red t-b'>An error occured, please try again by refreshing the page.</p>
          </div>
        </div>
      )
    }

    return (
      <div class='row p-tb-2'>
        <div class='col-12'>
          <ul class='m-0 p-0 list-unstyled'>
            <li key="1234" data-id="1234" class='m-b-1 p-2 br c-b-light-gray c-dark-gray'>
              Story Title - Story By
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Feed
