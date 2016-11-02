import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	TextInput
} from 'react-native';

// import modules
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InputMessage extends Component {
	constructor(props) {
		super(props);

		this.state ={
			message: ''
		};
	}

	sendMessage() {
		const message = this.state.message;
		this.props.addMessage(message, this.props.channel);

		this.setState({
			message: ''
		});
	}

	render() {
		return (
			<View style={ styles.contentMessage }>
				<Icon name="tag-faces" size={22} color="#777" />
				<TextInput
					value={this.state.message}
					onChangeText={(text) => this.setState({message: text})}
					style={ styles.input }
					underlineColorAndroid="transparent"
					placeholder="Message #general"
					placeholderTextColor="#ccc"/>

				<TouchableOpacity onPress={this.sendMessage.bind(this)}>
					<Icon name="send" size={22} color="#777" />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	contentMessage: {
		padding: 5,
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderTopColor: '#eee',
		justifyContent: 'space-around',
		flexDirection: 'row',
		alignItems: 'center'
	},
	input: {
		flex: 1,
		fontSize: 16,
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 0
	}
})
