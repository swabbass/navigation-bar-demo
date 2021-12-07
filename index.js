import App, {SomeScreen} from './App';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('SomeScreen', () => SomeScreen);
Navigation.setDefaultOptions({
  statusBar: {
    drawBehind: true,
    backgroundColor: 'transparent',
  },
  topBar: {
    visible: false,
  },
  navigationBar: {
    visible: false,
  },
});
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});
