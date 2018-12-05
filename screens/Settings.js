import React, {Component} from 'react';
import { AsyncStorage } from "react-native"
import { Drawer,DefaultTheme,Switch,Appbar,List,Checkbox,Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Settings extends Component {

  constructor(props) {
    super(props);
    this._retrieveData();
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    isSwitchOn: false,
    active: 'algemeen',
    kleur: 'blauw',
  };

  saveData(keuze) {
    AsyncStorage.setItem('primair_scherm',keuze);
  };
  saveData2(keuze) {
    AsyncStorage.setItem('kleur',keuze);
  };

  _retrieveData = async () => {

    //get primair scherm
    try {
      const value = await AsyncStorage.getItem('primair_scherm');
      if (value !== null) {
        this.setState({ active: value });
      }
     } catch (error) {
       alert(error);
       AsyncStorage.setItem('primair_scherm','algemeen');
       this.setState({ active: 'algemeen' });
     }

     //get primair color
     try {
       const value = await AsyncStorage.getItem('kleur');
       if (value !== null) {
         this.setState({ kleur: value });
       }
      } catch (error) {
        alert(error);
        AsyncStorage.setItem('kleur','blauw');
        this.setState({ kleur: 'blauw' });
      }
  };



  render() {
    const { isSwitchOn } = this.state;
    const { active } = this.state;
    const { kleur } = this.state;
    return (
      <PaperProvider theme={theme}>
        <Appbar.Header >
          <Appbar.BackAction
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Appbar.Content
            title="Settings"
          />
        </Appbar.Header>
        <List.Section>
                <List.Accordion
                  title="Activiteiten"
                  left={props => <List.Icon {...props} icon="nature-people" />}
                >
                  <List.Item title="Primair scherm:" />
                  <Drawer.Section>
                    <Drawer.Item
                      label="Algemene activiteiten"
                      active={active === 'algemeen'}
                      onPress={() => {
                        this.setState({ active: 'algemeen' });
                        this.saveData('algemeen');
                      }}
                    />
                    <Drawer.Item
                      label="-9"
                      active={active === 'minnegen'}
                      onPress={() => {
                        this.setState({ active: 'minnegen' });
                        this.saveData('minnegen');
                       }}
                    />
                    <Drawer.Item
                      label="-12"
                      active={active === 'mintwaalf'}
                      onPress={() => {
                        this.setState({ active: 'mintwaalf' });
                        this.saveData('mintwaalf');
                       }}
                    />
                    <Drawer.Item
                      label="-16"
                      active={active === 'minzestien'}
                      onPress={() => {
                        this.setState({ active: 'minzestien' });
                        this.saveData('minzestien');
                       }}
                    />
                    <Drawer.Item
                      label="+16"
                      active={active === 'pluszestien'}
                      onPress={() => {
                        this.setState({ active: 'pluszestien' });
                        this.saveData('pluszestien');
                       }}
                    />
                    <Drawer.Item
                      label="+20"
                      active={active === 'plustwintig'}
                      onPress={() => {
                        this.setState({ active: 'plustwintig' });
                        this.saveData('plustwintig');
                       }}
                    />
                  </Drawer.Section>
                </List.Accordion>

                <List.Accordion
                  title="Primary color"
                  left={props => <List.Icon {...props} icon="color-lens" />}
                  expanded={this.state.expanded}
                  onPress={this._handlePress}
                >
                  <Drawer.Section>
                    <Drawer.Item
                      label="blauw"
                      active={kleur === 'blauw'}
                      onPress={() => {
                        this.setState({ kleur: 'blauw' });
                        this.saveData2('blauw');
                      }}
                    />
                    <Drawer.Item
                      label="groen"
                      active={kleur === 'groen'}
                      onPress={() => {
                        this.setState({ kleur: 'groen' });
                        this.saveData2('groen');
                       }}
                    />
                  </Drawer.Section>
                </List.Accordion>
              </List.Section>
     </PaperProvider>
    );
  }
}
module.exports = Settings;

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
