import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.texto}>Hello Word!</Text>
      <Text style={styles.texto}> ECT2525</Text>
      <Image style={styles.imagem}
        source={require('./assets/imagens/Pernalonga.jpeg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 50,
    color: "#fff"
    }
});
