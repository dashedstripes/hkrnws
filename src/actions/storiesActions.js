import axios from 'axios'

const ARTICLES_PER_PAGE = 25

export function fetchInitialStories(page) {
  let index = page - 1
  return (dispatch) => {
    dispatch({
      type: 'FETCH_INITIAL_TOP_STORIES',
      payload: axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    }).then((data) => {
      dispatch({
        type: 'FETCH_INITIAL_CURRENT_STORIES',
        payload: axios.all(data.value.data.slice(index, index + ARTICLES_PER_PAGE).map((id) => {
          return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        }))
      })
    })
  }
}

export function updateStories(topStories, page) {
  let index = page + ARTICLES_PER_PAGE
  return {
    type: 'FETCH_UPDATED_STORIES',
    payload: axios.all(topStories.slice(index, index + ARTICLES_PER_PAGE).map((id) => {
      return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    }))
  }
}

export function fetchStory(id) {
  return {
    type: 'FETCH_STORY',
    payload: axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  }
}