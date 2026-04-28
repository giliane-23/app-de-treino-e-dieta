import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

  const router = useRouter();
  const valorAnimacaoMao = useRef(new Animated.Value(0)).current;


  useEffect(() => {

    const acenar = () => {
      Animated.sequence([

        Animated.timing(valorAnimacaoMao, { toValue: 1, duration: 150, easing: Easing.linear, useNativeDriver: true }),

        Animated.timing(valorAnimacaoMao, { toValue: -1, duration: 150, easing: Easing.linear, useNativeDriver: true }),

        Animated.timing(valorAnimacaoMao, { toValue: 0, duration: 150, easing: Easing.linear, useNativeDriver: true }),
      ]).start(() => {

        setTimeout(acenar, 1000);
      });
    };


    acenar();
  }, [valorAnimacaoMao]);


  const rotacaoMao = valorAnimacaoMao.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-10deg', '10deg'],
  });


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.titulo}>
          Olá!{' '}
    
          <Animated.View style={{ transform: [{ rotate: rotacaoMao }] }}>

            <Text style={{ fontSize: 28 }}>👋</Text>
          </Animated.View>
          {"\n"}
        </Text>

        <Image
          source={require('./../assets/images/teste.png')}
          style={styles.ursinho}
          resizeMode="contain"
        />

        <Text style={styles.subtitulo}>
          Escolha seu perfil para começar!
        </Text>


        <TouchableOpacity style={styles.botao} onPress={() => router.push('/login')} activeOpacity={0.7}>

          <View style={styles.containericoneTexto}>
            <MaterialIcons name="person" size={24} color="#FFF" style={styles.icone} />
            <Text style={styles.textoBotao}>ALUNO</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => router.push('/login')} activeOpacity={0.7}>
          <View style={styles.containericoneTexto}>
            <MaterialIcons name="assignment" size={24} color="#FFF" style={styles.icone} />
            <Text style={styles.textoBotao}>INSTRUTOR</Text>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  titulo: {
    fontFamily: 'arial',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9B6B9E',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitulo: {
    fontFamily: 'arial',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#B58DB6',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 15,
    marginTop: 10,
    marginHorizontal: 20,
  },


  container: {
    flex: 1,
    backgroundColor: '#ffe1eb',
  },


  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },


  ursinho: {
    width: 280,
    height: 280,
    marginBottom: 40,
    resizeMode: 'contain',
  },

  botao: {

    backgroundColor: '#FFB7CE',
    width: '85%',
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 10,
  },

  containericoneTexto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icone: {
    marginRight: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});