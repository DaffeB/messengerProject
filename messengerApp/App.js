import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Button
} from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/components/Header';
import ChatsScreen from './src/screens/BottomTabNavigatorScreens/ChatsScreen';
import CallsScreen from './src/screens/BottomTabNavigatorScreens/CallsScreen';
import SettingsScreen from './src/screens/BottomTabNavigatorScreens/SettingsScreen';
import PeopleScreen from './src/screens/BottomTabNavigatorScreens/PeopleScreen';
import BackButtonHeader from './src/const/BackButtonHeader';
import { GlobalStyles } from './src/const/styles';
import { Image } from 'react-native';
import FriendsMessages from './src/screens/FriendsMessages';


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
          tabBarLabel: ({ focused, color, fontSize }) => (
            <Text style={{
              color: focused ? GlobalStyles.colors.greenFive : GlobalStyles.colors.greyFive,
              fontSize: focused ? 14 : 12

            }


            }>Messages</Text>
          ),
          headerLeft: () => <Image source={require('./src/assets/images/cat.png')}
            style={{ width: 35, height: 35, marginLeft: 16, marginTop: 16, marginBottom: 16 }} />,


          headerRight: ({ color, focused }) =>
            //Profile photo
            <TouchableOpacity>

              <Image

                source={require('./src/assets/images/edit.png')} style={{ width: 20, height: 20, marginRight: 16, marginTop: 16, marginBottom: 16, tintColor: GlobalStyles.colors.greenSix }} />

            </TouchableOpacity>,
          tabBarIcon: ({ focused }) =>

            <Image
              source={require('./src/assets/images/bubbleMessages.png')}
              style={{
                width: focused ? 23 : 20,
                height: focused ? 23 : 20,
                tintColor: focused ? GlobalStyles.colors.greenFive : 'black',
              }}
            // style={{ width: 20, height: 20 }}

            />


        }} />
      <BottomTabs.Screen name='Calls Screen' component={CallsScreen}
        options={{

          tabBarLabel: 'Calls',
          tabBarLabel: ({ focused, color, fontSize }) => (
            <Text style={{
              color: focused ? GlobalStyles.colors.greenFive : GlobalStyles.colors.greyFive,
              fontSize: focused ? 14 : 12

            }




            }>Calls</Text>
          ),
          tabBarIcon: ({ focused }) =>
            <Image
              source={require('./src/assets/images/telephone.png')}
              style={{
                width: focused ? 23 : 20,
                height: focused ? 23 : 20,
                tintColor: focused ? GlobalStyles.colors.greenFive : 'black',
              }}
            />
        }} />

      <BottomTabs.Screen name="PoepleScreen" component={PeopleScreen}
        options={{
          title: 'Friends',
          tabBarLabel: 'People',
          tabBarLabel: ({ focused, color, fontSize }) => (
            <Text style={{
              color: focused ? GlobalStyles.colors.greenFive : GlobalStyles.colors.greyFive,
              fontSize: focused ? 14 : 12

            }

            }>People</Text>
          ),
          tabBarIcon: ({ focused }) =>
            <Image
              source={require('./src/assets/images/people.png')}
              style={{
                width: focused ? 23 : 20,
                height: focused ? 23 : 20,
                tintColor: focused ? GlobalStyles.colors.greenFive : 'black',
              }}
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
          tabBarLabel: ({ focused, color, fontSize }) => (
            <Text style={{
              color: focused ? GlobalStyles.colors.greenFive : GlobalStyles.colors.greyFive,
              fontSize: focused ? 14 : 12

            }




            }>Settings</Text>
          ),
          tabBarIcon: ({ focused }) =>
            <Image
              source={require('./src/assets/images/settings.png')}
              style={{
                width: focused ? 23 : 20,
                height: focused ? 23 : 20,
                tintColor: focused ? GlobalStyles.colors.greenFive : 'black',
              }}
            />
        }}

      />
    </BottomTabs.Navigator>
  )
}



const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="ScreensTabs" component={ScreensTabs}

        />
        <Stack.Screen name="Header" component={Header}

        />
        <Stack.Screen name="FriendsMessages" component={FriendsMessages}

          options={{
            headerShown: true,

            headerLeft: () =>
              <BackButtonHeader />
          }}

        />
      </Stack.Navigator>
    </NavigationContainer >


  );
};

const styles = StyleSheet.create({

});

export default App;