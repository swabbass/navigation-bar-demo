import App, {SomeScreen} from './App';
import {Navigation} from 'react-native-navigation';
import animations from './animations';
Navigation.registerComponent('App', () => App);
Navigation.registerComponent('SomeScreen', () => SomeScreen);
Navigation.setDefaultOptions({
  animations,
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
