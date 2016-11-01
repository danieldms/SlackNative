
import initial from '../resources/fake/messages';

const Reducer = (state=initial, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
			state = [
				...state,
				{ uid: '8f1d29', time: '05:12 AM', message: action.playload }
			];
			return state;
			break;
		default:
			return state;
			break;
	}
}

export default Reducer;
