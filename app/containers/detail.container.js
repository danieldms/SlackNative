import React, { Component } from 'react';
import { 
	StyleSheet,
	TouchableOpacity,
	ListView,
	Image,
	View,
	TextInput,
	Text
} from 'react-native';

// import modules
import Icon from 'react-native-vector-icons/MaterialIcons';


// import components
import NavApp from '../components/navigator.component';

export default class Detail extends Component {
	render () {
		return (
			<View style={styles.container}>
				<NavApp>
					<TouchableOpacity 
						style={{ flexDirection: 'row', alignItems: 'center' }} 
						onPress={ () => { this.props.navigator.pop() }}>
							<Icon name="navigate-before" size={25} color="#FFF"/>
							<Text style={styles.title}>Detail Message</Text>
					</TouchableOpacity>
				</NavApp>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {	
		flex: 1
	},
	title: {
		color: '#fff',
		fontWeight: '400',
		fontSize: 20,
		flex: 1,
		margin: 10,
		marginLeft: 10
	}
});