import React from 'react';
import { View, Text, FlatList } from "react-native";

import { ValueContainer, ValueRow, ValueTitle, ValueValue } from '../styles/ComponentStyles';

const ValueDisplayList = ({ data }) => (
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
);

export default ValueDisplayList;