import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
import { useNavigation } from '@react-navigation/native';




const DATA = [
  {
    id: '1',
    title: 'All types of PC parts',
    description: 'Selling all types of used computer parts. Send an...',
    price: "€1350",
    image: 'https://cnet4.cbsistatic.com/img/uA_Aj0KbQNXIkV4ehCy24RifA74=/940x0/2019/11/23/4e21a4ae-cab6-4ea5-ace9-c3d8603ff017/all-parts.jpg'
  },
  {
    id: '2',
    title: 'Custom built computer',
    description: 'Custom built computer for sale. Built around 2 yea...',
    price: "€1500",
    image: 'https://i.pinimg.com/originals/a9/f1/3b/a9f13b36609d268f33c60e622c90cb5c.jpg'
  },
  {
    id: '3',
    title: 'Radeon RX 570x',
    description: 'Radeon pro 570x for sale. Used for aorund 2 weeks. ',
    price: "€140",
    image: 'https://i.ebayimg.com/thumbs/images/g/yeAAAOSwz05cG-dq/s-l300.jpg'
  },
  {
    id: '4',
    title: 'AMD Ryzen 5 2600x',
    description: 'Selling AMD Ryzen 5 2600x CPU. Have been using it...  ',
    price: "€100",
    image: 'https://sm.pcmag.com/pcmag_uk/review/a/amd-ryzen-/amd-ryzen-5-2600x-review_5t47.jpg'
  },
  {
    id: '5',
    title: 'Gaming keyboard',
    description: 'My old gaming keyboard for sale. Found this some...',
    price: "€50",
    image: 'https://static0.makeuseofimages.com/wp-content/uploads/2020/02/gaming-keyboard-mice.jpg'
  },
  {
    id: '6',
    title: 'Asus ROG Swift',
    description: 'Asus ROG Swift monitor for sale. 24 inch 360HZ. Conta...',
    price: "€900",
    image: 'https://i.pcmag.com/imagery/reviews/06hj5mRyDKSUivkHOyDczyN-16..1598552099.png'
  },
  {
    id: '7',
    title: 'Headphones',
    description: 'Selling my sons computer headphones. Dont know much...',
    price: "€20",
    image: 'https://icdn2.digitaltrends.com/image/digitaltrends/hp-omen-mindframe-headset.jpg'
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

        <TouchableOpacity
          onPress={() => navigation.navigate('Creating AD')} 
          style={styles.sibutton}>

            <Text style={styles.txt}>
              Create
            </Text>

        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => navigation.navigate('Messages')} 
          style={styles.sibutton}>

            <Text style={styles.txt}>
              Messages
            </Text>

        </TouchableOpacity>

      </View>


      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Advertisment')}>

            <View style={styles.view} >

              <Image source={{uri: item.image}} style={{width: 135, height: 85}} />

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
