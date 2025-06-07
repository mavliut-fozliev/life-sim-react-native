import React, {useEffect} from 'react';
import {BackHandler, Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from './src/pages/Menu/Menu';
import {PageNames} from './src/shared/constants/pages';
import Home from './src/pages/home/Home/Home';
import StartNewLife from './src/pages/StartNewLife/StartNewLife';
import Settings from './src/pages/Settings/Settings';
import {useInitialStoreValues} from './src/App/hooks/useInitialStoreValues';
import Activities from './src/pages/home/Activities/Activities';
import People from './src/pages/home/People/People';
import Intercations from './src/pages/home/Interactions.tsx/Interactions';
import City from './src/pages/home/City/City';
import History from './src/pages/home/History/History';
import Topbar from './src/App/widgets/Topbar/Topbar';
import FullScreenAnimation from './src/shared/ui/components/FullScreenAnimation/FullScreenAnimation';
import PopUpWindow from './src/App/widgets/PopUpWindow/PopUpWindow';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const setInitialStoreValues = useInitialStoreValues();
  setInitialStoreValues();

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
          <Stack.Screen name={PageNames.History} component={History} />
          <Stack.Screen name={PageNames.StartNewLife} component={StartNewLife} />
          <Stack.Screen name={PageNames.Settings} component={Settings} />
        </Stack.Navigator>
        <FullScreenAnimation />
        <PopUpWindow />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {height: '100%'},
});

export default App;
