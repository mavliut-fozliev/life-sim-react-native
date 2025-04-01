import React, {useEffect} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';
import UI from './src/UI/UI';
import {topBarColor} from './src/consts/styles';

function App(): React.JSX.Element {
  useEffect(() => {
    const disableBackButton = () => true;
    const backHandler = BackHandler.addEventListener('hardwareBackPress', disableBackButton);
    return () => backHandler.remove();
  }, []);

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
