import request from "../common/request";
const getNewsCompleted = news => ({
  type: "GET_NEWS_COMPLETED",
  payload: news
})

export const getNews = () => (
  dispatch => {
    request("https://raw.githubusercontent.com/jszgb/jszgb.github.io/master/posts/2016-02-09_jsZgb-23.md")
    .then(response => {
      response.text().then( res => {
        dispatch(getNewsCompleted(res))
      })
    })
  }
);
