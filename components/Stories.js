
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList} from 'react-native';


export default function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(function(){
    async function getData() {
        const response = await fetch('https:://mobile.ect.ufrn.br:3000/stories');
        const stories = await response.json();
        setStories(stories);
    }
    getData();
  }, [])
    
    function renderItens({item}) {
        return <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={{uri: item.imgPerfilUri}}/>
          <Text>{item.nomeUsuario}</Text>
        </View>
        </View>
    }


    return (
        <View style={styles.stories}>
        <FlatList 
            data={stories}
            renderItem={renderItens}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
        </View>
    );
}

const styles = StyleSheet.create ({

    stories: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#fff',
       },
       story: {
        height: 70,
        width: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        },
        imgstory:{
          width: 55,
          height: 55,
          borderRadius: 35,
        },
      
});


const stories = [
    {
        id:1,
        nome:'Perna',
        src: require('../assets/imagens/Pernalonga.jpeg')
    },
    {
        id:2,
        nome:'Taz',
        src: require('../assets/imagens/Taz.png'),
    },
    {
        id:3,
        nome:'Frajola',
        src: require('../assets/imagens/Frajola.png'),
    },
    {
        id:4,
        nome:'Patolino',
        src: require('../assets/imagens/Patolino.jpg'),
    },
    {
        id:5,
        nome:'Piu piu',
        src: require('../assets/imagens/Piu_piu.jpg'),
    },
    {
        id:6,
        nome:'Felicia',
        src: require('../assets/imagens/Felicia.png'),
    },
];