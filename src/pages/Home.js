import React, { Component } from 'react'
import { connect } from 'react-redux'

import Feed from '../components/Feed'

class Home extends Component {

  render() {
    return (
      <div class='row'>
        <div class='p-tb-2'>
          <Feed />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Home)
