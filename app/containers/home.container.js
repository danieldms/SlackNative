import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';

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

// import action creators
import * as actions from '../actions/creators/message';

// import components
import NavApp from '../components/navigator.component';
import FeedList from '../components/feed.list.component';
import Channel from '../components/channel.component';
import InputMessage from '../components/input.message.component';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class HomeContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.setState ({
			dataSource: dataSource.cloneWithRows(this.props.messages)
		})
	}

	componentWillReceiveProps(nextProps){
	
		this.setState ({
			dataSource: this.state.dataSource.cloneWithRows(nextProps.messages)
		})
	}

	renderRow(row) {
		return <FeedList row={row} navigator={this.props.navigator}/>
	}

	render() {
		console.log('render');
		return (
			<View style={styles.container}>
				<NavApp>
					<TouchableOpacity onPress={() => { this.props.openPanel() }}>
						<Image style={styles.logo} source={require('../resources/freepik.jpg')} />
					</TouchableOpacity>

					<Text style={styles.title}>SlackNative</Text>

					<View style={styles.icons}>
						<Icon name="search" color="#fff" size={25} />
						<Icon name="more-vert" color="#fff" size={25} />
					</View>
				</NavApp>

				<Channel name="general" />

				<ListView style={{ flex: 1 }}
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)} />

				<InputMessage addMessage={this.props.addMessage} />

			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		messages: state.messages
	};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

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
	}
});
