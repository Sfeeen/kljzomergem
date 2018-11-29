import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//screens
import HomeScreen from './screens/HomeScreen'
import ActiviteitenLijst from './screens/ActiviteitenLijst'
import Settings from './screens/Settings'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Act: ActiviteitenLijst,
  Set: Settings,
});

const App = createAppContainer(RootStack);

export default App;
