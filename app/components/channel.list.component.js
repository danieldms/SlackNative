import React, { Component } from 'react';
import { 
	StyleSheet,
	TouchableOpacity,
	Image,
	View,
	Text
} from 'react-native';

// import data
import UserList from '../resources/fake/users';

export default class FeedList extends Component {
	render(){
		return (
			<TouchableOpacity>
				<View style={{flexDirection: 'column', flex: 1, marginLeft: 15}}>
					<Text>#</Text>
					<Text>need-help</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
