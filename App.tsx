import React, {useEffect} from 'react';
import {BackHandler, Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from './src/UI/pages/Menu/Menu';
import {PageNames} from './src/consts/pages';
import Home from './src/UI/pages/Menu/src/Home/Home';
import StartNewLife from './src/UI/pages/Menu/src/StartNewLife/StartNewLife';
import Settings from './src/UI/pages/Menu/src/Settings/Settings';
import {useInitialStoreValues} from './src/hooks/useInitialStoreValues';
import Activities from './src/UI/pages/Menu/src/Home/src/pages/Activities/Activities';
import Topbar from './src/UI/pages/Menu/src/Topbar/Topbar';
import People from './src/UI/pages/Menu/src/Home/src/pages/People/People';
import Intercations from './src/UI/pages/Menu/src/Home/src/pages/Interactions.tsx/Interactions';
import City from './src/UI/pages/Menu/src/Home/src/pages/City/City';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const setInitialStoreValues = useInitialStoreValues();
  setInitialStoreValues();

  // disable back button
  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => subscription.remove();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle={'dark-content'} />
        <Topbar />
        <Stack.Navigator
          initialRouteName={PageNames.Menu}
          screenOptions={{gestureEnabled: Platform.OS === 'android', animation: 'flip', headerShown: false}}>
          <Stack.Screen name={PageNames.Menu} component={Menu} />
          <Stack.Screen name={PageNames.Home} component={Home} />
          <Stack.Screen name={PageNames.City} component={City} />
          <Stack.Screen name={PageNames.Activities} component={Activities as any} />
          <Stack.Screen name={PageNames.People} component={People} />
          <Stack.Screen name={PageNames.Intercations} component={Intercations as any} />
          <Stack.Screen name={PageNames.StartNewLife} component={StartNewLife} />
          <Stack.Screen name={PageNames.Settings} component={Settings} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {height: '100%'},
});

export default App;
