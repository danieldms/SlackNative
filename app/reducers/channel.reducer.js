
var initial = {
	'UNREADS': [{name: 'general', unread: true}, {name: 'random', unread: true}, {name: 'react-facebook', unread: true}, {name: 'react-redux', unread: true}],
	'CHANNELS': [{name: 'react-channel'}, {name: 'react-jobs'}, {name: 'react-events'}],
	'DIRECT MESSAGE': [{name: 'slackbot'}, {name: 'SlackNative (you)'}]
};

const Reducer = (state=initial, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default Reducer;