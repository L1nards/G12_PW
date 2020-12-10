import * as React from 'react';
import { Image, Text, View, FlatList, StyleSheet, Component } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Constants from 'expo-constants';
import pic1 from '../assets/ad1.jpg';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
   

    <View >
      <Image source={pic1} style={ styles.adimage }/>
      <Text
        style={styles.title}>
        Computer + Monitor
      </Text>
      <Text
        style={styles.desc}>
        Selling 2 year old Computer + Monitor + Keyboard and Mouse 
      </Text>
      
      <Text style={styles.text1}>
        Price: <Text style={styles.text2}>
           €2000
          </Text> 
          
      </Text>

      <Text style={styles.text1}>
        Location: <Text style={styles.text2}>
             Valmiera, Valmieras Rajons
          </Text>
           
      </Text>

      <Text style={styles.text1}>
        Condition: <Text style={styles.text2}>
            Used
          </Text>
           
      </Text>

      <Text style={styles.text1}>
        Seller: <Text style={styles.text2}>
             Andris #241
          </Text> 
          
      </Text>

    </View>
    
  );
}
const styles=StyleSheet.create({
   adimage:{ 
    width: 350,
    height: 250,
    borderWidth:1,
    borderColor: "#000",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  title:{
    marginLeft: 20, 
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 23,
    fontWeight: "bold"
  },

  desc:{
    marginLeft: 20, 
    marginRight: 20,
    marginBottom: 20,
    fontSize: 18,
  },

  text1:{
    marginLeft: 20, 
    marginRight: 20,
    fontSize: 17,
  },

  text2:{
    marginLeft: 20, 
    marginRight: 20,
    fontSize: 17,
    fontWeight: "bold"
  },
});
