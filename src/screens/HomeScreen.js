import React, { useState } from 'react';
import { View, Text, Button, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { BleManager, Device } from 'react-native-ble-plx';

import AppButton from '../components/AppButton';
import ValueDisplayList from '../components/ValueDisplayList';
import { ScreenContainer, ContentContainer } from '../styles/ScreenStyles';


const HomeScreen = ({navigation}) => {

	return (
		<ScreenContainer>
			<ContentContainer>
				<ValueDisplayList/>
				<AppButton 
					title="Setting" 
					onPress={() => navigation.navigate('Settings')}
				/>
			</ContentContainer>
		</ScreenContainer>
	)

};

export default HomeScreen;