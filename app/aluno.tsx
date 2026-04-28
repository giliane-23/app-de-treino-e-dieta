import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AlunoScreen() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containertitulo}>
                <Text style={styles.titulo} >Bem-vinda ao seu perfil, Gili!</Text>
            </View>
            <Image
                source={require('./../assets/images/gi.png')}
                style={styles.gi}
                resizeMode="contain"
            />
            <View style={styles.content}>
                <Text style={styles.subtitulo2}>Escolha uma opção abaixo:</Text>
                <TouchableOpacity style={[styles.botao, styles.botaoDieta]} activeOpacity={0.7} onPress={() => router.push('./dieta')}>
                    <View style={styles.containerIconeTexto}>
                        <MaterialIcons name="restaurant" size={24} color="#fff" style={styles.icone} />
                        <Text style={styles.textoBotao}>Minha Dieta</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={() => router.push('./meus-treinos')}>

                    <View style={styles.containerIconeTexto}>
                        <MaterialIcons name="fitness-center" size={24} color="#fff" style={styles.icone} />
                        <Text style={styles.textoBotao}>Meus Treinos</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.rodape}><Text style={styles.subtitulo1}>Área do Aluno 🏋️‍♀️</Text></View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffe1eb',
    },

    containertitulo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 5,
    },
    titulo: {
        fontFamily: 'arial',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#9B6B9E',
        textAlign: 'center',
        marginBottom: 10,
        margin: 20,
        marginVertical: 2,
    },
    gi: {
        width: 200,
        height: 200,
        marginBottom: 20,
        alignSelf: 'center',
        transform: [{ translateY: 50 }],
    },
    subtitulo1: {
        fontFamily: 'arial',
        fontSize: 18,
        fontWeight: 'normal',
        color: '#B58DB6',
        textAlign: 'center',
        lineHeight: 25,
        marginBottom: 40,
    },
    subtitulo2: {
        fontFamily: 'arial',
        fontSize: 18,
        fontWeight: 'normal',
        color: '#9B6B9E',
        textAlign: 'center',
        marginBottom: 20,
    },

    ursinho: {
        width: 280,
        height: 280,
        marginBottom: 40,
        resizeMode: 'contain',
    },

    botao: {
        width: '80%',
        backgroundColor: '#FFB7CE',
        paddingVertical: 15,
        borderRadius: 30,
        marginBottom: 20,
    },
    botaoDieta: {
        backgroundColor: '#E0BBE4',
    },
    containerIconeTexto: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icone: {
        marginRight: 10,
    },
    textoBotao: {
        fontFamily: 'arial',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    rodape: {
        fontSize: 10,
        fontFamily: 'arial',
        color: '#B58DB6',
        textAlign: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        transform: [{ translateY: 60 }],
    }
});