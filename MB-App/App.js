import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import homescreen from './components/home.js';
import listscreen from './components/main.js';
import advertisment from './components/adv.js';
import createadv from './components/create.js';
import singin from './components/sign-in.js';
import chat from './components/chat';
import messages from './components/msg';

const Stack = createStackNavigator();

export default function App() {
  return (
     
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={homescreen}
        options={{
          title: 'Home',
          backgroundColor: '#000',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor:'#212121',

          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 28,
          },
        }}
        />
        <Stack.Screen 
        name="Newest Listings" 
        component={listscreen}
        options={{
          title: 'Listings',
          backgroundColor: '#000',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor:'#212121',

          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 28,
          },
        }}
        />
        <Stack.Screen 
        name="Advertisment" 
        component={advertisment}
        options={{
          title: null,
          backgroundColor: '#000',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor:'#212121',

          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 28,
          },
        }}
        />
        <Stack.Screen 
        name="Creating AD" 
        component={createadv}
        options={{
          title: 'Create your AD',
          backgroundColor: '#000',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor:'#212121',

          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 28,
          },
        }}
        />
        <Stack.Screen 
        name="Sign in" 
        component={singin}
        options={{
          title: 'Sign in',
          backgroundColor: '#000',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor:'#212121',

          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 28,
          },
        }}
        />
        <Stack.Screen 
        name="Chat" 
        component={chat}
        options={{
          title: null,
          backgroundColor: '#000',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor:'#212121',

          }
        
        }}
        />
         <Stack.Screen 
        name="Messages" 
        component={messages}
        options={{
          title: 'Messages',
          backgroundColor: '#000',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor:'#212121',

          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 28,
          },
        }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}