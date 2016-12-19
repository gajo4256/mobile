import {compose, applyMiddleware, createStore} from 'redux'

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = compose(
  applyMiddleware(thunk, logger())
)

export default createStore(reducer, middleware);
