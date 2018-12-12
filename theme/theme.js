import { DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#314674', //#314674 donkerblauw
    accent: '#b8ddaf',
    background:  '#becce2',
    surface: '#314674',
    backdrop: '#314674',
  }

};
module.exports = theme;
