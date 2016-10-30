import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import FeedList from '../components/feed.list.component';
import Channel from '../components/channel.component';

import NavApp from '../components/navigator.component';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class HomeContainer extends Component {
	constructor(props) {
		super(props);

		this.state ={
			dataSource: []
		};
	}

	componentWillMount() {
		this.setState ({
			dataSource: dataSource.cloneWithRows(this.props.messages)
		})
	}

	renderRow(row) {
		return <FeedList row={row} navigator={this.props.navigator}/>
	}

	render() {
		return (
			<View style={styles.container}>
				<NavApp>
					<TouchableOpacity onPress={() => { this.props.openPanel() }}>
						<Image style={styles.logo} source={require('../resources/freepik.jpg')} />
					</TouchableOpacity>

					<Text style={styles.title}>TechMasters</Text>

					<View style={styles.icons}>
						<Icon name="search" color="#fff" size={25} />
						<Icon name="more-vert" color="#fff" size={25} />
					</View>
				</NavApp>

				<Channel name="general" />

				<ListView style={{ flex: 1 }}
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)} />

				<View style={ styles.contentMessage }>
					<Icon name="tag-faces" size={22} color="#777" />
					<TextInput 
						style={ styles.input }
						underlineColorAndroid="transparent"
						placeholder="Message #general"
						placeholderTextColor="#ccc"/>
					<Icon name="send" size={22} color="#777" />

				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		messages: state.messages
	};
}

export default connect(mapStateToProps)(HomeContainer);

const styles = StyleSheet.create({
	container: {	
		flex: 1
	},
	logo: {
		width: 30,
		height: 30,
		borderRadius: 5
	},
	title: {
		color: '#fff',
		fontWeight: '400',
		fontSize: 20,
		flex: 1,
		margin: 10,
		marginLeft: 10
	},
	icons: {
		width: 70,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginRight: 5
	},
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
});