import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

function App(props) {
  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', 'App componentDidAppear');
      },
      componentDidDisappear: () => {
        console.log('RNN', 'App componentDidDisappear');
      },
    };
    // Register the listener to all events related to our component
    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      props.componentId,
    );
    return () => {
      // Make sure to unregister the listener during cleanup
      unsubscribe.remove();
    };
  }, [props.componentId]);
  return (
    <View style={styles.background}>
      <View style={styles.content}>
        <Button
          title={'Push'}
          onPress={async () => {
            await pushScreen(props);
          }}
        />
      </View>
    </View>
  );
}

export function SomeScreen(props) {
  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', 'SomeScreen componentDidAppear');
      },
      componentDidDisappear: () => {
        console.log('RNN', 'SomeScreen componentDidDisappear');
      },
    };
    // Register the listener to all events related to our component
    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      props.componentId,
    );
    return () => {
      // Make sure to unregister the listener during cleanup
      unsubscribe.remove();
    };
  }, [props.componentId]);
  return (
    <View style={styles.contentBG}>
      <View style={styles.content}>
        <Button
          title={'Push'}
          onPress={async () => {
            await pushScreen(props);
          }}
        />
        <Button
          title={'Pop'}
          onPress={async () => {
            await popScreen(props);
          }}
        />
      </View>
    </View>
  );
}
const pushScreen = async props => {
  await Navigation.push(props.componentId, {
    component: {
      name: 'SomeScreen',
    },
  });
};
const popScreen = async props => {
  await Navigation.pop(props.componentId);
};
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'blue',
  },
  contentBG: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'green',
  },
  content: {
    position: 'absolute',
    backgroundColor: 'red',
    top: '50%',
    left: '50%',
  },
});

export default App;
