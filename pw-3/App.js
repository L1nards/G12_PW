import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homescreen from './components/hscr';
import listscreen from './components/listscreen';
<body>
 <script src="ex.js"></script>
</body>
const Stack = createStackNavigator();
export default function App() {
  return (
     
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={homescreen}/>
        <Stack.Screen name="lists" component={listscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
