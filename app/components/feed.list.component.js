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

const initStyle = { borderRadius: 5, width: 45, height: 45 };

export default class FeedList extends Component {
	constructor(props) {
		super(props);

		this.detailsHandler = this.detailsHandler.bind(this);
	}

	detailsHandler(rowId) {
		const navigator = this.props.navigator;

		navigator.push({
			id: "detail-message"
		});
	}

	render(){
		const { row } = this.props;
		const user = UserList.filter(function(v) { return v.uid == row.uid })[0];
		return (
			<TouchableOpacity style={styles.item} onPress={ () => { this.detailsHandler(user) }}>
				<Image source={ user.image } style={ initStyle } resizeMode='contain' />
				<View style={{ flexDirection: 'column', flex: 1, marginLeft: 15 }}>
					<Text style={styles.user}>{ user.name }  <Text style={ styles.time }>{ row.time }</Text> </Text>
					<Text style={[ styles.content, (row.type ? styles.join : '') ]}>{ row.message }</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flexWrap: 'wrap',
		justifyContent: 'flex-start'
	},
	item: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#f8f8f8',
		justifyContent: 'space-between',
		flexDirection: 'row',
		backgroundColor: '#fff'
	},
	user: {
		fontWeight: '700',
		justifyContent: 'center',
		fontSize: 12
	},
	time: {
		fontSize: 10, 
		fontWeight: '400', 
		color: '#ccc'
	},
	join: {
		fontStyle: 'italic',
		color: '#ccc',
		fontSize: 12
	}
});

