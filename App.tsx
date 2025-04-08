import React, {useEffect} from 'react';
import {BackHandler, Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Menu from './src/UI/pages/Menu/Menu';
import {PageNames} from './src/consts/pages';
import Home from './src/UI/pages/Menu/src/Home/Home';
import StartNewLife from './src/UI/pages/Menu/src/StartNewLife/StartNewLife';
import Settings from './src/UI/pages/Menu/src/Settings/Settings';
import useGlobalStore from './src/storage/store';
import {safestr} from './src/utils/common';
import {useInitialStoreValues} from './src/hooks/useInitialStoreValues';
import Activities from './src/UI/pages/Menu/src/Home/src/pages/Activities/Activities';
import Places from './src/UI/pages/Menu/src/Home/src/pages/Places/Places';
import Topbar from './src/UI/pages/Menu/src/Topbar/Topbar';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const {localizedText} = useGlobalStore();

  const setInitialStoreValues = useInitialStoreValues();
  setInitialStoreValues();

  // disable back button
  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => subscription.remove();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Topbar />
      <Stack.Navigator
        initialRouteName={PageNames.Menu}
        screenOptions={{gestureEnabled: Platform.OS === 'android', animation: 'flip'}}>
        <Stack.Screen
          name={PageNames.Menu}
          component={Menu}
          options={getScreenOptions(safestr(localizedText?.menu?.options?.menu))}
        />
        <Stack.Screen name={PageNames.Home} component={Home} options={getScreenOptions('test')} />
        <Stack.Screen name={PageNames.Places} component={Places} options={getScreenOptions('test')} />
        <Stack.Screen name={PageNames.Activities} component={Activities} options={getScreenOptions('test')} />
        <Stack.Screen
          name={PageNames.StartNewLife}
          component={StartNewLife}
          options={getScreenOptions(safestr(localizedText.menu?.options?.startNewLife))}
        />
        <Stack.Screen
          name={PageNames.Settings}
          component={Settings}
          options={getScreenOptions(safestr(localizedText.menu?.options?.settings))}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const getScreenOptions = (title: string) =>
  ({
    title,
    headerShown: false,
  } as NativeStackNavigationOptions);
