import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import UI from './src/UI/UI';
import {topBarColor} from './src/consts/styles';

function App(): React.JSX.Element {
  return (
    <View style={styles.app}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <View style={styles.topIndent} />
        <UI />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#333',
    height: '100%',
  },
  topIndent: {
    height: 20,
    backgroundColor: topBarColor,
  },
});

export default App;
