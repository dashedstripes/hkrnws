import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PageButtons extends Component {
  render() {

    if (this.props.page === 1) {
      return (
        <div>
          <Link to={`/?p=${this.props.page + 1}`} onClick={this.handleNext} class='m-r-1 button tertiary'>NEXT</Link>
        </div>
      )
    }

    return (
      <div>
        <Link to={`/?p=${this.props.page - 1}`} onClick={this.handlePrevious} class='m-r-1 button tertiary'>PREVIOUS</Link>
        <Link to={`/?p=${this.props.page + 1}`} onClick={this.handleNext} class='m-r-1 button tertiary'>NEXT</Link>
      </div>
    )
  }
}

export default PageButtons
