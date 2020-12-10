import * as React from 'react';
import { useState } from 'react';
import { Text, View, Styles, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';



export default function App({navigation}) {
  const [changedText, setChangedText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  return (
      <View style={{flex: 1, justifyContent: 'center',}}>
        
        <TextInput
          style={styles.inputcreate}
          placeholder='Enter Component Name'
        />

        <TextInput
          multiline
          numberOfLines={7}
          style={styles.descriptioncreate}
          placeholder='Description'
        />

        <TextInput
          style={styles.inputcreate}
          placeholder='Price'
        />

        <TextInput
          style={styles.inputcreate}
          placeholder='Location'
        />

        <TextInput
          style={styles.inputcreate}
          placeholder='Condition'
        />

        <TouchableOpacity
            onPress={() => navigation.navigate('Newest Listings')} 
            style={styles.okbutton}>

          <Text style={styles.txt}>Confirm</Text>

        </TouchableOpacity>

      </View>
 );
}

const styles=StyleSheet.create({
  inputcreate: {
    borderWidth: 1,
    borderColor: '#777',
    margin:5,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    textAlign: "center",
    borderRadius: 7,
    },

  descriptioncreate:{
    textAlignVertical: 'top',
    textAlign: "center",
    borderWidth: 1,
    borderColor: '#777',
    margin:5,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    borderRadius: 7,
    },

  okbutton:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginLeft: 20,
    marginRight: 20,
  },
  txt:{
    color: "#fcfcfc",
    fontSize: 19,
    
    },
});