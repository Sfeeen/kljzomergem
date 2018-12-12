import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//screens
import HomeScreen from './screens/HomeScreen';
import ActiviteitenLijst from './screens/ActiviteitenLijst';
import Settings from './screens/Settings';
import Fotomaker from './screens/Fotomaker';
import Contacten from './screens/Contacten';
import AddScreen from './screens/AddScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Act: ActiviteitenLijst,
  Set: Settings,
  Fot: Fotomaker,
  Con: Contacten,
  Add: AddScreen,
});

const App = createAppContainer(RootStack);

export default App;
