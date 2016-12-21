
const defaultState = {
  tab: "news"
};

export default function tabsReducer(state = defaultState, action) {
  switch (action.type) {
    case "CHANGE_TAB": {
      return {
        tab: action.payload
      }
    }
    default: {
      return state
    }
  }
}
