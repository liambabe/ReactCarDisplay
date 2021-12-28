import React, { Component } from 'react';
import { Text, View } from "react-native";

import AppButton from '../components/AppButton';
import PopupMenu from '../components/PopupMenu';
import { ScreenContainer, ContentContainer } from '../styles/ScreenStyles';

class SettingsScreen extends React.Component {

	constructor(props) {
		super(props);
		const { navigation } = this.props;
	}

	render() {
		const { navigation } = this.props;
		return (
			<ScreenContainer>
				<ContentContainer>
					<AppButton title="Return" onPress={() => navigation.navigate('Home')}></AppButton>
				</ContentContainer>
				<PopupMenu/>
			</ScreenContainer>
		);
	}

}

export default SettingsScreen;