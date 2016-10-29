import React, { Component } from 'react';
import { Navigator } from 'react-native';

// import modules
import DrawerLayout from 'react-native-drawer';

// import containers
import Home from './containers/home.container';
import DetailMessage from './containers/detail.container';
import ControlPanel from './containers/controlpanel.container';

const NoBackSwipe ={
  ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: {
      pop: {},
    },
};

export default class Application extends Component {
	constructor(props) {
		super(props);

		this.closeControlPanel = this.closeControlPanel.bind(this);
		this.openControlPanel = this.openControlPanel.bind(this);
	}

	closeControlPanel = () => {
    	this._drawer.close();
  	}

  	openControlPanel = () => {
	    this._drawer.open();
	}

	_renderScene(route, navigator) {
		switch(route.id) {
			case 'home':
				return ( <Home openPanel={() => { this.openControlPanel() }} navigator={navigator} />);
				break;
			case 'detail-message':
				return ( <DetailMessage openPanel={() => { this.openControlPanel() }} navigator={navigator} />);
				break;
		}
	}

	render() {
		return (
			<DrawerLayout
				type="overlay"
				tapToClose={true}
				openDrawerOffset={0.2}
				styles={drawerStyles}
				ref={(ref) => this._drawer = ref}
		        content={<ControlPanel onPress = {() => this.closeControlPanel()} />}
		        >
					<Navigator
						initialRoute={{id: "home"}}
						configureScene={ () => { return NoBackSwipe }}
						renderScene={this._renderScene.bind(this)} />
			</DrawerLayout>

		);
	}
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3}
}