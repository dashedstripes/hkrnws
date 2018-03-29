import React, { Component } from 'react'

class PageButtons extends Component {
  render() {

    if (this.props.page === 1) {
      return (
        <div>
          <button onClick={this.props.handleNext} class='m-r-1 button tertiary'>NEXT</button>
        </div>
      )
    }

    return (
      <div>
        <button onClick={this.props.handlePrevious} class='m-r-1 button tertiary'>PREVIOUS</button>
        <button onClick={this.props.handleNext} class='m-r-1 button tertiary'>NEXT</button>
      </div>
    )
  }
}

export default PageButtons
