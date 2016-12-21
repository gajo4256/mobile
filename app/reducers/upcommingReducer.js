
const defaultState = {
  events: {
    past: [],
    future: []
  },
  fetching: false
};

export default function upcommingReducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_UPCOMMING_STARTED": {
      return {
        ...state,
        fetching: true
      }
    }
    case "GET_UPCOMMING_COMPLETED": {
      var now = Date.now() / 1000 || 0;
      return {
        ...state,
        fetching: false,
        events: {
          past: action.payload.events.filter( e => {
            const d = e.day.split('.')
             const date = new Date(d[2], (parseInt(d[1], 10) - 1), (parseInt(d[0], 10) + 1)).getTime() / 1000 || 0
             if (parseInt(now) > parseInt(date)) {
               return true
             }
          }).reverse(),
          future: action.payload.events.filter( e => {
            const d = e.day.split('.')
            const date = new Date(d[2], (parseInt(d[1], 10) - 1), (parseInt(d[0], 10) + 1)).getTime() / 1000 | 0
            if (now < date) {
             return true
            }
          })
        }
      }
    }
    default: {
      return state
    }
  }
}
