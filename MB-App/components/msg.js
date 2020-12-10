import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
import { useNavigation } from '@react-navigation/native';




const DATA = [
  {
    id: '1',
    title: 'Raivo#79',
    description: 'It sounds good',
    price: null,
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
  {
    id: '2',
    title: 'Andris#426',
    description: 'Yes, I can make it there',
    price: null,
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
  {
    id: '3',
    title: 'Madara#231',
    description: 'Hello, are you still selling your PC ',
    price: null,
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
  
];


export default function Listings({navigation}) {
  

  const renderItem = ({ item }) => (
    <ListItem title={item.title} price={item.price} image={item.image} description={item.description} />
  );
  
  const ListItem = ({ props, title, description, price, image, navigation, }) => (

 <View style={styles.view} >

    <Image source={{uri: image}} style={{width: 125, height: 75}} />

      <View style={{flex: 1, flexDirection: 'column'}}>
     
        <Text style={styles.title}> {title} </Text>
        <Text>{description}</Text>
        <Text style={styles.price}> {price} </Text>
      
     </View>
  </View>

);

  return (

    <View>
      <View style={{ flexDirection: 'row' }}>

       
        

      </View>


      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>

            <View style={styles.view} >

              <Image source={{uri: item.image}} style={{width: 85, height: 83}} />

                <View style={{flex: 1, flexDirection: 'column'}}>
              
                  <Text style={styles.title}> {item.title} </Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.price}> {item.price} </Text>
                
              </View>
            </View>
          </TouchableOpacity> 
          )}

        keyExtractor={item => item.id}

      />

    </View>
  );
}

const styles=StyleSheet.create({
  sibutton: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:10,
    backgroundColor: "#282828",
    margin: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    },

  txt:{
    color: "#fcfcfc",
    fontSize: 19,
      
      },

  title:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom:2,
    marginLeft: 7,
    marginTop: 2,
    },

  description:{
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 10,
    },

  price:{
    flex: 1,
    fontSize: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    textAlignVertical: "bottom",
    fontWeight: 'bold',
  },

  view:{
    flex: 1, 
    flexDirection:'row', 
    backgroundColor: "#f5f5f5",  
    margin: 7,
    marginHorizontal: 20,
    borderColor: '#000',
    borderWidth: 1,
    },

  buttonview:{
    backgroundColor: "#ccc",  
    margin: 10,
    marginHorizontal: 20,
    borderColor: '#000',
    marginBottom: 50,
    },
});
