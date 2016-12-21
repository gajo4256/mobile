import request from "../common/request";
const getUpcommingStarted = () => ({
  type: "GET_UPCOMMING_STARTED"
})
const getUpcommingCompleted = upcomming => ({
  type: "GET_UPCOMMING_COMPLETED",
  payload: upcomming
})

export const getUpcomming = () => (
  dispatch => {
    dispatch(getUpcommingStarted())
    request("https://raw.githubusercontent.com/jszgb/jszgb.github.io/master/events.json")
    .then(response => {
      response.text().then( res => {
        dispatch(getUpcommingCompleted(JSON.parse(res)))
      })
    })
  }
);
