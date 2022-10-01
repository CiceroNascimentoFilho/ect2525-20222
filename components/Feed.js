import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed() {

    const feed = [
        {
            id: 1,
            nome: 'Piu piu',
            imgPerfil: require('../assets/imagens/Piu_piu.jpg'),
            img: require('../assets/imagens/tinytoons.jpeg'),
            aspectRatio: 1.777,
        },
        {
            id:2,
            nome:'Perna',
            imgPerfil:require('../assets/imagens/Pernalonga.jpeg'),
            img:require('../assets/imagens/tinytoons3.jpg'),
            aspectRatio:1.777,
        },
        {
            id: 3,
            nome:'Taz',
            imgPerfil:require('../assets/imagens/Taz.png'),
            img:require('../assets/imagens/tinytoons2.jpg'),
            aspectRatio:1.777,
        },
    ]

    function renderItem({item}) {
        return <View style={styles.post}>
        <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
            <Image style={styles.postheaderimg} source={item.imgPerfil}></Image>
            <Text>{item.nome}</Text>
          </View>
          <FontAwesome5 name="ellipsis-h" size={16} color="black"/>
        </View>
        <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.img}/>
        <View style={styles.footer}>
          <FontAwesome5 style={styles.footericon} name="heart" size={16} color="black" ></FontAwesome5>
          <FontAwesome5 style={styles.footericon} name="comment" size={16} color="black" ></FontAwesome5>
        </View>
      </View>
    }

    return (
<View style={styles.feed}>
        <FlatList
            data={feed}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
</View>

    );
}


const styles = StyleSheet.create({
    feed:{
        backgroundColor: '#fff',
        marginBottom: 10,
        },
      post:{
        backgroundColor: '#fff',
        
      },
      postheader:{
        flexDirection: 'row',
        height:30,
        alignItems: 'center',
        justifyContent:'space-between',
        margin: 10,
      },
      postheaderesquerda:{
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      postheaderimg:{
        height:40,
        width:40,
        borderRadius: 25,
        marginRight: 10,
      },
      postimg:{
        width:'100%',
        height: undefined,
      },
      footer:{
        height: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
      },
      footericon:{
        margin: 5,
      },
    
    
});