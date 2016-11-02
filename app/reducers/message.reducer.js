
import initial from '../resources/fake/messages';

const Reducer = (state=initial, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			state = {
				...state,
				[action.channel]: [
					...state[action.channel],
					{ uid: '8f1d29', time: '05:12 AM', message: action.message }
				]
			}
	}

	return state;
}

export default Reducer;
