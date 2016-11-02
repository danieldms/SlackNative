export const addMessage = (message, channel) => {
	return {
		type: "ADD_MESSAGE",
		message,
		channel
	}
}
