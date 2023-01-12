
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
import PeopleScreen from './src/screens/BottomTabNavigatorScreens/PeopleScreen';
import { GlobalStyles } from './src/const/styles';
import { Image } from 'react-native';
import Testing from './src/components/Testing';


const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()


const ScreensTabs = () => {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.white, height: 100 }



    }}

    >
      <BottomTabs.Screen name='ChatScreen' component={ChatsScreen}
        options={{
          title: 'Chats',


          tabBarLabel: 'Messages',
          headerLeft: () => <Image source={require('./src/assets/images/cat.png')}
            style={{ width: 35, height: 35, marginLeft: 16, marginTop: 16, marginBottom: 16 }} />,
          headerRight: () =>
            <Image

              source={require('./src/assets/images/edit.png')} style={{ width: 20, height: 20, marginRight: 16, marginTop: 16, marginBottom: 16 }} />
          ,
          tabBarIcon: () =>
            <Image
              source={require('./src/assets/images/bubbleMessages.png')}
              style={{ width: 20, height: 20 }}

            />
        }} />
      <BottomTabs.Screen name='Calls Screen' component={CallsScreen}
        options={{
          title: 'Calls',
          tabBarLabel: 'Calls',
          tabBarIcon: () =>
            <Image
              source={require('./src/assets/images/telephone.png')}
              style={{ width: 20, height: 20 }}
            />
        }} />

      <BottomTabs.Screen name="PoepleScreen" component={PeopleScreen}
        options={{
          title: 'Friends',
          tabBarLabel: 'People',
          tabBarIcon: () =>
            <Image
              source={require('./src/assets/images/people.png')}
              style={{ width: 20, height: 20 }}
            />,
          headerLeft: () => {
            return <Image style={{ width: 35, height: 35, marginLeft: 16, marginTop: 16, marginBottom: 16 }} source={require('./src/assets/images/cat.png')} />

          }
        }}

      />
      <BottomTabs.Screen name='Settings' component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarLabel: 'Settings',
          tabBarIcon: () =>
            <Image
              source={require('./src/assets/images/settings.png')}
              style={{ width: 20, height: 20 }}
            />
        }}

      />
    </BottomTabs.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreensTabs" component={ScreensTabs}
          options={{
            headerShown: false,

          }}

        // options={{
        //   headerLeft: () => {
        //     return <Image style={{ width: 20, height: 20 }} source={require('./src/assets/images/cat.png')} />

        //   }
        // }}
        />
        <Stack.Screen name="Header" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
