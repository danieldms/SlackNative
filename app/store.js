import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// import root reducers
import Reducers from './reducers/';

const store = createStore(
	Reducers,
	{},
	applyMiddleware(logger)
);

export default store;