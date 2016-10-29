import React, { Component } from 'react';
import { 
	View,
	Text
} from 'react-native';

const channel = function(props) {
	return (
		<View style={{backgroundColor: '#f7f8fc', paddingLeft: 10, paddingTop: 2, paddingBottom: 2, borderBottomColor: '#eee', borderBottomWidth: 1}}>
			<Text style={{padding: 5, fontSize: 12}}># {props.name}</Text>
		</View>
	);
}

module.exports = channel;