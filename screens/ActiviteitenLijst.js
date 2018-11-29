import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {DefaultTheme, Appbar, BottomNavigation, Provider as PaperProvider } from 'react-native-paper';

import Lijst from '../components/Lijst';
import home from '../data/home_dummydata';
import minnegen from '../data/minnegen_dummydata';



//const HomeRoute = () => <View style={styles.container}><Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text><FBLoginButton /></View>;
const HomeRoute = () => <Lijst data={home} stijl={styles.flatlistview_home}></Lijst>;
//const HomeRoute = () => <ListSection />
const MinnegenRoute = () => <Lijst data={minnegen} stijl={styles.flatlistview_minnegen}></Lijst>;
const MintwaalfRoute = () => <Lijst data={minnegen} stijl={styles.flatlistview_mintwaalf}></Lijst>;
const MinzestienRoute = () => <Lijst data={minnegen} stijl={styles.flatlistview_minzestien}></Lijst>;
const PluszestienRoute = () => <Lijst data={minnegen} stijl={styles.flatlistview_pluszestien}></Lijst>;
const PlustwintigRoute = () =>  <Lijst data={minnegen} stijl={styles.flatlistview_plustwintig}></Lijst>;

type Props = {};

export default class ActiviteitenLijst extends Component<Props> {

      static navigationOptions = {
        header: null
      }

      state = {
        index: 0,
        routes: [
          { key: 'home', title: 'Home', icon: 'home', color: '#314674' },
          { key: 'minnegen', title: '-9', icon: 'pets', color: '#1b8585' },
          { key: 'mintwaalf', title: '-12', icon: 'motorcycle', color: '#af0202' },
          { key: 'minzestien', title: '-16', icon: 'color-lens', color: '#66b416' },
          { key: 'pluszestien', title: '+16', icon: 'beach-access', color: '#7d1935' },
          { key: 'plustwintig', title: '+20', icon: 'insert-emoticon', color: '#ff7400' },
        ],
      };

      _handleIndexChange = index => this.setState({ index });

      _renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        minnegen: MinnegenRoute,
        mintwaalf: MintwaalfRoute,
        minzestien: MinzestienRoute,
        pluszestien: PluszestienRoute,
        plustwintig: PlustwintigRoute,
      });


      render() {
        return (
          <PaperProvider theme={theme}>
            <Appbar.Header >
              <Appbar.BackAction
                onPress={() => this.props.navigation.navigate('Home')}
              />
              <Appbar.Content
                title="Activiteiten"
              />
            </Appbar.Header>
            <BottomNavigation
              navigationState={this.state}
              onIndexChange={this._handleIndexChange}
              renderScene={this._renderScene}
            />
          </PaperProvider>
        );
      }
}

const styles = StyleSheet.create({
  flatlistview_home: {
    backgroundColor: '#88a5ce',
    borderColor: '#314674',
  },
  flatlistview_minnegen: {
    backgroundColor: '#72afaf',
    borderColor: '#1b8585',
  },
  flatlistview_mintwaalf: {
    backgroundColor: '#b55555',
    borderColor: '#af0202',
  },
  flatlistview_minzestien: {
    backgroundColor: '#b1e57b',
    borderColor: '#66b416',
  },
  flatlistview_pluszestien: {
    backgroundColor: '#b78693',
    borderColor: '#7d1935',
  },
  flatlistview_plustwintig: {
    backgroundColor: '#e89958',
    borderColor: '#ff7400',
  },
  container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#314674',
    accent: '#f1c40f',
    background:  '#becce2',
  }

};