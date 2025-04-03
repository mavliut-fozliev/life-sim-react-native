import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors, fontSizes} from './src/consts/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Menu from './src/UI/pages/Menu/Menu';
import {PageNames} from './src/consts/pages';
import Home from './src/UI/pages/Menu/src/Home/Home';
import StartNewLife from './src/UI/pages/Menu/src/StartNewLife/StartNewLife';
import Settings from './src/UI/pages/Menu/src/Settings/Settings';
import {getLocalizedText} from './src/locales/getLocalizedText ';
import MenuIcon from './src/icons/MenuIcon';
import IconButton from './src/UI/components/IconButton/IconButton';
import {Navigation} from './src/types/navigation';
import {playerStore} from './src/storage/store';
import Resource from './src/UI/pages/Menu/src/Home/src/Resource/Resource';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const localizedText = getLocalizedText().menu.options;

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator initialRouteName={PageNames.Menu}>
        <Stack.Screen name={PageNames.Menu} component={Menu} options={getScreenOptions('Life Simulator')} />
        <Stack.Screen
          name={PageNames.Home}
          component={Home}
          options={({navigation}) => ({
            headerLeft: () => GoHomeButton({navigation}),
            headerTitle: HomeTopBar,
          })}
        />
        <Stack.Screen
          name={PageNames.StartNewLife}
          component={StartNewLife}
          options={getScreenOptions(localizedText.startNewLife)}
        />
        <Stack.Screen
          name={PageNames.Settings}
          component={Settings}
          options={getScreenOptions(localizedText.settings)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  name: {
    fontSize: fontSizes.large,
  },
});

export default App;

const getScreenOptions = (title: string) =>
  ({
    title,
    headerStyle: {backgroundColor: colors.background.primary},
    headerTintColor: colors.text.secondary,
    headerTitleStyle: {fontWeight: 'bold'},
  } as NativeStackNavigationOptions);

const GoHomeButton = ({navigation}: {navigation: Navigation}) => (
  <IconButton icon={<MenuIcon size={35} />} onPress={() => navigation.goBack()} />
);

const HomeTopBar = () => {
  const name = playerStore.name.get();
  const surname = playerStore.surname.get();
  return (
    <View style={styles.contentBox}>
      <Text numberOfLines={1} style={styles.name}>
        {name} {surname}
      </Text>
      <Resource name="energy" value={12} />
      <Resource name="money" value={34} />
    </View>
  );
};
