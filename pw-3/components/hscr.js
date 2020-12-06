import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useState } from 'react';


export default function HomeScreen({ navigation, stock }) { const [counter, setCounter] = useState(0);
  return (
    <View
      style={{ flex: 1, alignItems: 'top', justifyContent: 'top', margin: 10 }}>
      <Button
        title="Go to lists"
        onPress={() => navigation.navigate('lists')} />
      <View style={{ margin: 10 }}></View>
      <Button
        title="Increase Counter"
        onPress={() => {
          setCounter(counter + 1);
        }} /> 
      <View style={{ margin: 10 }}></View>
      <Button
        title="Decreasee Counter"
        onPress={() => { 
          setCounter(counter - 1);
        }} />
        <View style={{ marginTop: 10 }}></View>
      <Text style={{margin: 20, alignSelf:"center", fontFamily: 'calibri'}}> Counter value: {counter}</Text>
    </View>
  );
}
