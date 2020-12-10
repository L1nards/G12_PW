import { StatusBar } from 'expo-status-bar'; 
import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; /* 2nd and 3rd line always*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!!! From Group nr. 12: Toms Sirmulis</Text>
      <Text>This is my Toms Sirmulis first React native application!!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
