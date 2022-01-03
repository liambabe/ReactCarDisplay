import React from 'react';
import { Text, View } from "react-native";

import AppButton from '../components/AppButton';
import PopupMenu from '../components/PopupMenu';
import { ScreenContainer, ContentContainer } from '../styles/ScreenStyles';



const SettingsScreen = ({navigation}) => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<AppButton title="Return" onPress={() => navigation.navigate('Home')}></AppButton>
			</ContentContainer>
			<PopupMenu/>
		</ScreenContainer>
	)
}

export default SettingsScreen;