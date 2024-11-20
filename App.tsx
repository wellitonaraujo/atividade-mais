/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { TrackingProvider } from './src/context/TrackingContext'; 
import TabNavigator from './src/navigation/TabNavigator';

function App(): React.JSX.Element {

  return (
    <TrackingProvider>
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <TabNavigator />
    </NavigationContainer>
  </TrackingProvider>
  );
}

export default App;
