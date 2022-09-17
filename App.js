import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.ufrngram} source={require('./assets/imagens/ufrngram.png')}/>
        <FontAwesome5 name="paper-plane" size={24} color="black"/>
      </View>
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/Pernalonga.jpeg')}/>
          <Text>Perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/Taz.png')}/>
          <Text>Taz</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/Frajola.png')}/>
          <Text>Frajola</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/Patolino.jpg')}/>
          <Text>Patolino</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/Piu_piu.jpg')}/>
          <Text>Piu piu</Text>
        </View>
      </View>

      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg} source={require('./assets/imagens/Piu_piu.jpg')}></Image>
              <Text>Piu piu</Text>
            </View>
            <FontAwesome5 name="ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/imagens/tinytoons.jpeg')}/>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
 header: {
  flexDirection: 'row',
  pedding: 10,
  height: 50,
  backgroundColor: '#fff',
  alignItens: 'center',
  justifyContent:'space-between',
  margin: 10,
 },
 ufrngram: {
  height: 25,
  width: 110,
 },
 stories: {
  flexDirection: 'row',
  height: 90,
  backgroundColor: '#fff',
 },
 story: {
  height: 90,
  width: 90,
  backgroundColor: '#fff',
  alignItems: 'center',
  },
  imgstory:{
    width: 70,
    height: 70,
    borderRadius: 35,
  },
 feed:{
    flex: 1,
    backgroundColor: '#f00',
  },
  post:{
    backgroundColor: 'blue',
    
  },
  postheader:{
    flexDirection: 'row',
    height:60,
    
    alignItems: 'center',
    justifyContent:'space-between',
    margin: 10,
  },
  postheaderesquerda:{
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  postheaderimg:{
    height:50,
    width:50,
    borderRadius: 25,
    marginRight: 10,
  },
  postimg:{
    width:'100%',
    height: undefined,
  }
  

});
