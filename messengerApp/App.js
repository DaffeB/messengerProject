
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/components/Header';
import ChatsScreen from './src/screens/BottomTabNavigatorScreens/ChatsScreen';
import CallsScreen from './src/screens/BottomTabNavigatorScreens/CallsScreen';
import SettingsScreen from './src/screens/BottomTabNavigatorScreens/SettingsScreen';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()


const ScreensTabs = () => {
  return (
    <BottomTabs.Navigator screenOptions={{

    }}>
      <BottomTabs.Screen name='ChatsScreen' component={ChatsScreen} />
      <BottomTabs.Screen name='Calls Screen' component={CallsScreen} />
      <BottomTabs.Screen name='Settings' component={SettingsScreen} />
    </BottomTabs.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreensTabs" component={ScreensTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Header" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
