import React, { useState } from 'react';
import { View, Text, FlatList } from "react-native";

import { ValueContainer, ValueRow, ValueTitle, ValueValue } from '../styles/ComponentStyles';

const ValueDisplayList = () => {

  const [coolantTemp, setCoolantTemp] = useState(0);
  const [AirIntakeTemp, setAirIntakeTemp] = useState(0);
  const [MapSensorTemp, setMapSensorTemp] = useState(0);
  const [FanStatus, setFanStatus] = useState('Off');
  const [data] = useState([
    {
      key: 'Coolant Temperature:', 
      value: coolantTemp
    },
    {
      key: 'Air Intake Temperature:', 
      value: AirIntakeTemp
    },
    {
      key: 'Map Sensor Pressure:', 
      value: MapSensorTemp
    },
    {
      key: 'Fan Status:', 
      value: FanStatus
    }   
  ]);

  return (
    <ValueContainer
      data={data}
      renderItem={({ item, index }) => 
      (
        <ValueRow>
          <ValueTitle>{item.key}</ValueTitle>
          <ValueValue>{item.value}</ValueValue>
        </ValueRow>
      )}
    />
  )
};

export default ValueDisplayList;