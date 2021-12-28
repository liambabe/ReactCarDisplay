import React, { Component } from 'react';
import { View, Text, Button, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { BleManager, Device } from 'react-native-ble-plx';

import AppButton from '../components/AppButton';
import ValueDisplayList from '../components/ValueDisplayList';
import { ScreenContainer, ContentContainer } from '../styles/ScreenStyles';


export default class HomeScreen extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			coolantTemp: 0,
			AirIntakeTemp: 0,
			MapSensorTemp: 0,
			FanStatus: 'Off'
		}

		const { navigation } = this.props;

	};

	componentDidMount() {
		this.setState({
			data: [
				{
					key: 'Coolant Temperature:', 
					value: this.state.coolantTemp
				},
				{
					key: 'Air Intake Temperature:', 
					value: this.state.AirIntakeTemp
				},
				{
					key: 'Map Sensor Pressure:', 
					value: this.state.MapSensorTemp
				},
				{
					key: 'Fan Status:', 
					value: this.state.FanStatus
				}		
			]
		});
	}

	render() {
		const { navigation } = this.props;
		return (
			<ScreenContainer>
				<ContentContainer>
					<ValueDisplayList
						data={this.state.data}
					/>
			    <AppButton 
						title="Setting" 
						onPress={() => navigation.navigate('Settings')}
					/>
				</ContentContainer>
			</ScreenContainer>
		)
	};

}