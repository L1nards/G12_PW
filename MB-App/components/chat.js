import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


export default class Example extends Component {
  state = {
    messages: [],
  };
  UNSAFE_componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello! ',
          createdAt: new Date(),
          user: {
            _id: 2,
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
