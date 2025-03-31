import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import UI from './src/UI/UI';

function App(): React.JSX.Element {
  return (
    <View style={styles.app}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.uiBox}>
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
  uiBox: {
    marginTop: 20,
  },
});

export default App;
