import { combineReducers } from 'redux';

// import reducers
import channelReducer from './channel.reducer';
import messageReducer from './message.reducer';

const rootReducer = combineReducers({
	channels: channelReducer,
	messages: messageReducer
});

export default rootReducer;