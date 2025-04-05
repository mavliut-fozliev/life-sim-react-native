import React, {useEffect} from 'react';
import {BackHandler, StatusBar} from 'react-native';
import {colors} from './src/consts/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Menu from './src/UI/pages/Menu/Menu';
import {PageNames} from './src/consts/pages';
import Home from './src/UI/pages/Menu/src/Home/Home';
import StartNewLife from './src/UI/pages/Menu/src/StartNewLife/StartNewLife';
import Settings from './src/UI/pages/Menu/src/Settings/Settings';
import HomeTopBar from './src/UI/pages/Menu/src/Home/src/HomeTopBar/HomeTopBar';
import MenuButton from './src/UI/pages/Menu/src/Home/src/MenuButton/MenuButton';
import useGlobalStore from './src/storage/store';
import {safestr} from './src/utils/common';
import {useInitialStoreValues} from './src/hooks/useInitialStoreValues';

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
      <Stack.Navigator initialRouteName={PageNames.Menu} screenOptions={{gestureEnabled: false}}>
        <Stack.Screen name={PageNames.Menu} component={Menu} options={getScreenOptions('Life Simulator')} />
        <Stack.Screen
          name={PageNames.Home}
          component={Home}
          options={({navigation}) => ({
            headerLeft: () => MenuButton({navigation}),
            headerTitle: HomeTopBar,
            headerStyle: {backgroundColor: colors.background.secondary},
          })}
        />
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
    headerStyle: {backgroundColor: colors.background.primary},
    headerTintColor: colors.text.secondary,
    headerTitleStyle: {fontWeight: 'bold'},
  } as NativeStackNavigationOptions);
