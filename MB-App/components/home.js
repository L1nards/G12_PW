import * as React from 'react';
import { Image, Button, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useState } from 'react';


import logo from '../assets/PROT2-1.png';

export default function HomeScreen({ navigation, stock }) {
  return (
    
    <View style={{flex: 1, justifyContent: 'center', alignSelf: "center", margin: 15}}>

     <Image source={logo} style={{width:265, height:235, resizeMode:"stretch", alignItems:'center', margin:20}} />
          
      <View style={{flex:1, justifyContent:'center'}}/>

        <TouchableOpacity
          onPress={() => navigation.navigate('Sign in')} 
          style={styles.topbutton}>

          <Text style={styles.txt}>Log In</Text>

      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate('Newest Listings')} 
        style={styles.button}>

          <Text style={styles.txt}>Log in as a Guest</Text>
          
      </TouchableOpacity>

    </View>
  );
}

const styles=StyleSheet.create({
  topbutton: {
    alignItems: "center",
    backgroundColor: "#282828",
    margin: 10,
    padding: 10,
    borderWidth: 1,           
    borderRadius: 7,
    },

    
  button: {
      alignItems: "center",
      backgroundColor: "#282828",
      margin: 10,
      marginBottom: 60,
      padding: 10,
      borderWidth: 1,           
      borderRadius: 7,
      },
  
  txt:{
      color: "#fcfcfc",
      fontSize: 19
      },
  })