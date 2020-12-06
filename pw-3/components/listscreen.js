import * as React from 'react';
import { Text, View, FlatList, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const data = new Array(5).fill(null).map((v, i) => ({ key: i.toString(), value: `John Doe ${i}` }));
export default function App() {
  return (
    <View style = {styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.value}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    margin: 2,
    fontFamily: 'calibri',
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 1,
    padding:15,
    backgroundColor: "#93e37b"
  },
  
  
});