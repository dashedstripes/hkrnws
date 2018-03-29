import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchStory } from '../actions/storiesActions'

class Article extends Component {

  componentDidMount() {
    let articleId = this.props.match.params.article_id
    this.props.dispatch(fetchStory(articleId))
  }

  render() {

    if (this.props.pending) {
      return (
        <div class='row'>
          <div class='col-12'>
            <p>Loading...</p>
          </div>
        </div>
      )
    }

    if (this.props.rejected) {
      return (
        <div class='row'>
          <div class='col-12'>
            <p>An error occured, please try again.</p>
          </div>
        </div>
      )
    }

    return (
      <div class='row'>
        <div class='p-tb-2'>
          <h1>{this.props.selectedStory.title}</h1>
          <a href={this.props.selectedStory.url}>{this.props.selectedStory.url}</a>
          <p>by {this.props.selectedStory.by}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.stories
}

export default connect(mapStateToProps)(Article)
