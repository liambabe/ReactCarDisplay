import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainStackNavigator from './src/navigation/MainStackNavigator'



export default function App() {
  return (
    <SafeAreaProvider>
      <MainStackNavigator />
    </SafeAreaProvider>
    );
}