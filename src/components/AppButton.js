import React from 'react';
import { View, Button, TouchableOpacity, Text } from "react-native";
import { ButtonContainer, ButtonText } from '../styles/ComponentStyles';

const AppButton = ({ onPress, title }) => (
	<ButtonContainer
		activeOpacity={0.8}
		onPress={onPress}
	>
		<ButtonText>{title}</ButtonText>
	</ButtonContainer>
);

export default AppButton;