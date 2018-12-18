import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import {DefaultTheme, Appbar, BottomNavigation, Provider as PaperProvider } from 'react-native-paper';

import Lijst from '../components/Lijst';
import theme from '../theme/theme.js';

type Props = {};
var color = "#314674";
export default class ActiviteitenLijst extends Component {

      static navigationOptions = {
        header: null
      }

      constructor(props) {
        super(props);
        this._retrieveData();
      }

      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('primair_scherm');
          if (value !== null) {
            var keuze = 0;
            switch(value) {
              case "algemeen":
                keuze = 0;
                break;
              case "minnegen":
                keuze = 1;
                break;
              case "mintwaalf":
                keuze = 2;
                break;
              case "minzestien":
                keuze = 3;
                break;
              case "pluszestien":
                keuze = 4;
                break;
              case "plustwintig":
                keuze = 5;
                break;
              default:
                keuze = 0;
                break;
            }
            this.setState({ index: keuze });
          }
         } catch (error) {
           alert(error);
           this.setState({ index: 0 });
         }
      };

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
        home: () => <Lijst data={this.state.datahome} link={"http://www.kljzomergem.be/homeapi.php"} stijl={styles.flatlistview_home}></Lijst>,
        minnegen:() => <Lijst data={this.state.dataminnegen} link={"http://www.kljzomergem.be/minnegenapi.php"} stijl={styles.flatlistview_minnegen}></Lijst>,
        mintwaalf: () => <Lijst data={this.state.datamintwaalf} link={"http://www.kljzomergem.be/mintwaalfapi.php"} stijl={styles.flatlistview_mintwaalf}></Lijst>,
        minzestien: () => <Lijst data={this.state.dataminzestien} link={"http://www.kljzomergem.be/minzestienapi.php"} stijl={styles.flatlistview_minzestien}></Lijst>,
        pluszestien:() => <Lijst data={this.state.datapluszestien} link={"http://www.kljzomergem.be/pluszestienapi.php"} stijl={styles.flatlistview_pluszestien}></Lijst>,
        plustwintig: () => <Lijst data={this.state.dataplustwintig} link={"http://www.kljzomergem.be/plustwintigapi.php"} stijl={styles.flatlistview_plustwintig}></Lijst>,
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

});
