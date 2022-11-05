
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header() {
     return (
        <View style={styles.header}>
        <Image style={styles.ufrngram} source={require('../assets/imagens/ufrngram.png')}/>
        <FontAwesome5 name="paper-plane" size={24} color="black" onPress={() => Navigation.navigate('ChatList')}/>
      </View>
    );
}

const styles = StyleSheet.create({
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
      
   });