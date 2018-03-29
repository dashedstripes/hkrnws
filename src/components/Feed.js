import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import { fetchInitialStories, updateStories } from '../actions/storiesActions'
import PageButtons from './PageButtons'

class Feed extends Component {
  constructor() {
    super()

    this.state = {
      page: 1
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchInitialStories(this.state.page))
  }

  componentWillReceiveProps(nextProps) {
    const parsed = queryString.parse(this.props.location.search)

    if (Object.getOwnPropertyNames(parsed).length != 0) {
      this.setState({
        page: parseInt(parsed.p)
      })
    }
  }

  changePage(direction) {
    if (direction === 'NEXT') {
      this.setState({
        page: this.state.page + 1
      })
    }

    if (direction === "PREVIOUS") {
      this.setState({
        page: this.state.page - 1
      })
    }

    this.props.dispatch(updateStories(this.props.topStories, this.state.page))
  }

  render() {
    let storyli = this.props.currentStories.map((story) => {
      return (
        <li key={story.data.id} data-id={story.data.id} class='m-b-1 p-2 br c-b-light-gray c-dark-gray'>
          <Link to={`articles/${story.data.id}`}>{story.data.title}</Link> - {story.data.by}
        </li>
      )
    })

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
        {this.state.page}
        <div class='col-12'>
          <ul class='m-0 p-0 list-unstyled'>
            {storyli}
          </ul>
          <PageButtons
            page={this.state.page}
            handlePrevious={this.changePage.bind(this, 'PREVIOUS')}
            handleNext={this.changePage.bind(this, 'NEXT')}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.stories
}

export default connect(mapStateToProps)(Feed)
