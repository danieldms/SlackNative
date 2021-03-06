import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	ListView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	Text
} from 'react-native';

// import modules
import Icon from 'react-native-vector-icons/MaterialIcons';

// import action creators
import * as actions from '../actions/creators/channel';

var dataSource = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2,
	sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

class ControlPanel extends Component {
	constructor(props) {
		super(props);

		this.state ={
			dataSource: []
		};

		this.renderRow = this.renderRow.bind(this);
  	}

  	componentWillMount(){
		this.setState({
			dataSource: dataSource.cloneWithRowsAndSections(this.props.channels)
		});
  	}

	componentWillReceiveProps(nextProps){
		this.setState({
			dataSource: dataSource.cloneWithRowsAndSections(nextProps.channels)
		});
		
		this.props.closePanel();
  	}
	render() {
		return (
			<View style={styles.container}>
				<View style={{ padding: 15, paddingBottom: 0 }}>
					<View style={styles.row}>
						<Text style={ styles.title }>Home</Text>
						<Icon name='dashboard' size={25} color="#fff" />
					</View>
					<View style={[styles.jumpTo, styles.row]}>
						<Icon name='search' size={20} color="#fff"/>
						<TextInput
							style={styles.input}
							placeholderTextColor="#8C6F88"
							underlineColorAndroid="transparent"
							placeholder="Jump" />
					</View>
				</View>

				<ListView
		            dataSource={this.state.dataSource}
		            renderRow={this.renderRow}
		            renderSectionHeader={this.renderSectionHeader}
		          />
			</View>
		);
	}

	renderSectionHeader(sectionItems, section) {
	  	return (
	  		<View style={styles.sectionHeaderContent}>
	    		<Text style={styles.sectionHeader}>{section}</Text>
	    	</View>
	  	)
	}

	renderRow(row) {
		const style = row.unread == true ? styles.sectionItemUnread : styles.sectionItemRead;
		const active = this.props.active == row.name ? styles.active : '';

	    return (
	    	<TouchableOpacity style={[styles.rowClick, active]} onPress={()=> {this.props.setActive(row.name)}}>
	      		<Text style={style}>#  {row.name}</Text>
      		</TouchableOpacity>
	    )
	}
}

const mapStateToProps = (state) => {
	return {
		channels: state.channels.list,
		active: state.channels.active
	};
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#52374f',
		paddingTop: 15
	},
	title: {
		fontWeight: '600',
		fontSize: 20,
		color: '#fff'
	},
	sectionHeaderContent: {
		borderBottomWidth: 1,
		borderBottomColor: '#38173430',
		backgroundColor: '#52374f',
		padding: 5,
		paddingTop: 20
	},
	sectionHeader: {
		paddingLeft: 15,
		paddingRight: 15,
		color: '#BFADBD',
		fontSize: 12
	},
	sectionItemUnread: {
		fontWeight: '500',
		padding: 10,
		paddingLeft: 0,
		color: '#fff',
		fontSize: 16
	},
	sectionItemRead: {
		fontWeight: '300',
		padding: 10,
		paddingLeft: 0,
		color: '#ffffff50',
		fontSize: 16
	},
	rowClick: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		paddingLeft: 15
	},
	jumpTo: {
		marginTop: 10,
		paddingLeft: 10,
		borderRadius: 5,
		backgroundColor: '#341230'
	},
	input: {
		flex: 1,
		color: '#FFF',
		fontSize: 14,
		height: 40,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		justifyContent: 'space-between'
	},
	active: {
		backgroundColor: '#34123050'
	}
});
