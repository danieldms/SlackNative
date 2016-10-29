import React, { Component } from 'react';
import { 
	StyleSheet,
	View
} from 'react-native';

export default class NavigatorApp extends Component {
	render() {
	return (
			<View  style={styles.navigator}>
				{ this.props.children }
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navigator: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingTop: 15,
		paddingBottom: 3,
		paddingLeft: 10,
		alignItems:'center',
		backgroundColor: '#52374f'
	}
});