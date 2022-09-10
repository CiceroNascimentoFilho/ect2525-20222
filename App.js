import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.ufrngram} source={require('./assets/imagens/ufrngram.png')}/>
        <FontAwesome5 name="paper-plane" size={20} color="black"/>
      </View>
      <View style={styles.stories}>
        <View styles={styles.story}>

        </View>
        <View styles={styles.story}>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    marginTop: Constants.statusBarHeight,
  },
 header: {
  flexDiretion: 'row',
  padding: 10,
  height: 50,
  backgroundColor: '#0f0',
  alignItens: 'center',
  justifyContent: 'space-between',
 },
 ufrngram: {
  height: 25,
  width: 110,
 },
 stories: {
  flexDiretion: 'row',
  height: 90,
  backgroundColor: '#00f',
 },
 story: {
  height: 90,
  width: 90,
  backgroundColor: '#f00',
  },

});
