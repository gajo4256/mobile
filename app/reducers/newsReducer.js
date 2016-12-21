
const defaultState = {
  posts: []
};

export default function newsReducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_NEWS_COMPLETED": {
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      }
    }
    default: {
      return state
    }
  }
}
