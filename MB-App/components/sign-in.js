import * as React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import logo from '../assets/PROT2-1.png';


export default function App({navigation}) {
  const [changedText, setChangedText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  return (
     
          
        
    <View style={{flex: 1, justifyContent: 'center', alignSelf: "center", margin: 15}}>

    <Image source={logo} style={styles.img} />

    <Text style={{
      textAlign:"center", 
      marginBottom:10, 
      fontSize:20, 
      }}>
      
      Plese enter your login details!
    </Text>

    <TextInput
      style={styles.input}
      placeholder='E-mail or username'
    />
    
    <TextInput
      secureTextEntry={true}
      style={styles.passinput}
      placeholder='Password'
    />
    
    <TouchableOpacity
    onPress={() => navigation.navigate('Newest Listings')} 
    style={styles.sibutton}>

      <Text style={styles.txt}>Log In</Text>

  </TouchableOpacity>

  </View>
 );
}

const styles=StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#777',
    margin:5,
    padding: 5,
    textAlign: "center",
    borderRadius: 7
    },

  passinput: {
    borderWidth: 1,
    borderColor: '#777',
    margin:5,
    padding: 5,
    textAlign: "center",
    borderRadius: 7
    },
  sibutton: {
    alignItems: "center",
    backgroundColor: "#282828",
    margin: 10,
    marginBottom: 75,
    marginTop: 35,
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    },
  img: {
    width:265, 
    height:235, 
    resizeMode:"stretch", 
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom:100,
    },
  txt:{
    color: "#fcfcfc",
    fontSize: 19
    },

})