import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, Dimensions, StyleSheet } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
// import { Provider } from "react-redux"
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';



export default function App(){
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
      return null;
    } else {
      return (
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      );
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
