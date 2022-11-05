import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatListProps, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ChatList({navigation}) {
    const [chatlist, setChatlist] = useState([]);

    useEffect (() => {
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3000/chatlist');
            const chatlist = await response.json();
            setChatlist(chatlist);
        }
        getData();
    }, []);

    function renderItem({item}) {
        return <View style={styles.chat} onPress={() => navigation.navigate('Chatscreen')}>
            <Image style={styles.image} source={{ uri: item.imgPerfilUri}}/>
            <View style={styles.textBox}>
                <Text style={styles.nome}>{item.nomeUsuario}</Text>
                <Text>{item.ultimaMensagem}</Text>
            </View>
        </View>;
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <FlatList
                data={chatlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        BackgroundColor:'#fff',
    },
    chat: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    image:{
        height: 50,
        width: 50,
        margin: 5,
        borderRadius:25,
    },
    textBox: {
        justifyContent: 'center',
    },
    nome: {
        fontWeight: 'bold',
    }
});