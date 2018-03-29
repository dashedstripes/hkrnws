const defaultState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  topStories: [],
  start: 0,
  currentStories: [],
  selectedStory: {}
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_INITIAL_TOP_STORIES_PENDING': {
      return { ...state, pending: true }
    }
    case 'FETCH_INITIAL_TOP_STORIES_REJECTED': {
      return { ...state, pending: false, rejected: true }
    }
    case 'FETCH_INITIAL_TOP_STORIES_FULFILLED': {
      return { ...state, pending: true, fulfilled: true, topStories: action.payload.data }
    }

    case 'FETCH_INITIAL_TOP_STORIES_PENDING': {
      return { ...state, pending: true }
    }
    case 'FETCH_INITIAL_TOP_STORIES_REJECTED': {
      return { ...state, pending: false, rejected: true }
    }
    case 'FETCH_INITIAL_CURRENT_STORIES_FULFILLED': {
      return { ...state, pending: false, fulfilled: true, currentStories: action.payload }
    }

    case 'FETCH_UPDATED_STORIES_PENDING': {
      return { ...state, pending: true }
    }
    case 'FETCH_UPDATED_STORIES_REJECTED': {
      return { ...state, pending: false, rejected: true }
    }
    case 'FETCH_UPDATED_STORIES_FULFILLED': {
      return { ...state, pending: false, fulfilled: true, currentStories: action.payload }
    }

    case 'FETCH_STORY_PENDING': {
      return { ...state, pending: true }
    }
    case 'FETCH_STORY_REJECTED': {
      return { ...state, pending: false, rejected: true }
    }
    case 'FETCH_STORY_FULFILLED': {
      return { ...state, pending: false, fulfilled: true, selectedStory: action.payload.data }
    }
    default:
      return state
  }
}

export default reducer