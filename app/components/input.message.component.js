import React, { Component } from 'react';
import { 
	StyleSheet,
	View,
	TextInput
} from 'react-native';

// import modules
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InputMessage extends Component {
	render() {
		return (
			<View style={ styles.contentMessage }>
				<Icon name="tag-faces" size={22} color="#777" />
				<TextInput 
					style={ styles.input }
					underlineColorAndroid="transparent"
					placeholder="Message #general"
					placeholderTextColor="#ccc"/>
				<Icon name="send" size={22} color="#777" />
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