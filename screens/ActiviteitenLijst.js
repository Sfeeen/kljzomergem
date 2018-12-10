import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import {DefaultTheme, Appbar, BottomNavigation, Provider as PaperProvider } from 'react-native-paper';

import Lijst from '../components/Lijst';

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

      componentDidMount() {
        this.fetchAllData();
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

        datahome: [{"title":"failed", "description":"failed"}],
        dataminnegen: [{"title":"failed", "description":"failed"}],
        datamintwaalf: [{"title":"failed", "description":"failed"}],
        dataminzestien: [{"title":"failed", "description":"failed"}],
        datapluszestien: [{"title":"failed", "description":"failed"}],
        dataplustwintig: [{"title":"failed", "description":"failed"}],

      };

      _handleIndexChange = index => this.setState({ index });

      _renderScene = BottomNavigation.SceneMap({
        home: () => <Lijst data={this.state.datahome} stijl={styles.flatlistview_home}></Lijst>,
        minnegen:() => <Lijst data={this.state.dataminnegen} stijl={styles.flatlistview_minnegen}></Lijst>,
        mintwaalf: () => <Lijst data={this.state.datamintwaalf} stijl={styles.flatlistview_mintwaalf}></Lijst>,
        minzestien: () => <Lijst data={this.state.dataminzestien} stijl={styles.flatlistview_minzestien}></Lijst>,
        pluszestien:() => <Lijst data={this.state.datapluszestien} stijl={styles.flatlistview_pluszestien}></Lijst>,
        plustwintig: () => <Lijst data={this.state.dataplustwintig} stijl={styles.flatlistview_plustwintig}></Lijst>,
      });

      fetchAllData(){
        this.fetchDatahome();
        this.fetchDataminnegen();
        this.fetchDatamintwaalf();
        this.fetchDataminzestien();
        this.fetchDatapluszestien();
        this.fetchDataplustwintig();
        this.render();
      }

      fetchDatahome = async () => {
        try {
          let response = await fetch(
            'http://www.kljzomergem.be/mintwaalfapi.php',
          );
          let responseJson = await response.json();
          this.setState({ datahome: responseJson });
        } catch (error) {
          console.error(error);
        }
      };

      fetchDataminnegen = async () => {
        try {
          let response = await fetch(
            'http://www.kljzomergem.be/minnegenapi.php',
          );
          let responseJson = await response.json();
          this.setState({ dataminnegen: responseJson });
        } catch (error) {
          console.error(error);
        }
      };

      fetchDatamintwaalf = async () => {
        try {
          let response = await fetch(
            'http://www.kljzomergem.be/mintwaalfapi.php',
          );
          let responseJson = await response.json();
          this.setState({ datamintwaalf: responseJson });
        } catch (error) {
          console.error(error);
        }
      };

      fetchDataminzestien = async () => {
        try {
          let response = await fetch(
            'http://www.kljzomergem.be/minzestienapi.php',
          );
          let responseJson = await response.json();
          this.setState({ dataminzestien: responseJson });
        } catch (error) {
          console.error(error);
        }
      };

      fetchDatapluszestien = async () => {
        try {
          let response = await fetch(
            'http://www.kljzomergem.be/pluszestienapi.php',
          );
          let responseJson = await response.json();
          this.setState({ datapluszestien: responseJson });
        } catch (error) {
          console.error(error);
        }
      };

      fetchDataplustwintig = async () => {
        try {
          let response = await fetch(
            'http://www.kljzomergem.be/plustwintigapi.php',
          );
          let responseJson = await response.json();
          this.setState({ dataplustwintig: responseJson });
        } catch (error) {
          console.error(error);
        }
      };

      render() {
        //console.log(this.state.data);
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
      primary: '#314674', //#314674
      accent: '#f1c40f',
      background:  '#becce2',
    }

  };
