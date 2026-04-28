import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

    const handleLogin = () => {
        if (email === 'gilianerodriguesa@gmail.com' && senha === '123456') {
            router.replace('/aluno');
        } else {
            alert('E-mail ou senha incorretos!');
        }
    };

    return (

        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >

                <Image source={require('./../assets/images/teste.png')} style={styles.logo} />

                <Text style={styles.boasVindas}>Bem-vinda de volta!</Text>

                {/* Campo de E-mail */}
                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={20} color="#B58DB6" style={styles.inputIcone} />

                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor="#B58DB6"
                        value={email}
                        onChangeText={setEmail} // 3. Atualiza a "caixinha" toda vez que digita
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Campo de Senha */}
                <View style={styles.inputContainer}>
                    <MaterialIcons name="lock" size={20} color="#B58DB6" style={styles.inputIcone} />
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        placeholderTextColor="#B58DB6"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry // 4. Esconde os caracteres (vira bolinha)
                    />
                </View>

                {/* Botão de Entrar */}
                
                    <TouchableOpacity
                        style={styles.botaoEntrar}
                        onPress={() => router.replace('/aluno')} // 5. Replace substitui a tela (não deixa voltar pro login)
                    >
                        <Text style={styles.textoBotao}>ENTRAR</Text>
                    </TouchableOpacity>
                

                <TouchableOpacity
                    style={styles.botaoCadastrar}
                    onPress={() => router.push('/cadastrar')} // Navega para a tela de cadastro
                    activeOpacity={0.7}
                >
                    <Text style={styles.textoBotao}>CADASTRAR</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe1eb', // Seu rosa padrão
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        resizeMode: 'contain',
    },

    boasVindas: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#9B6B9E',
        marginBottom: 30,
        fontFamily: 'arial', // Ou Quicksand se já estiver funcionando
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%',
        height: 55,
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 15,
        elevation: 2, // Sombra leve
    },

    inputIcone: {
        marginRight: 10,
    },

    input: {
        flex: 1,
        color: '#9B6B9E',
        fontSize: 16,
    },

    botaoEntrar: {
        backgroundColor: '#FFB7CE',
        width: '80%',
        paddingVertical: 12,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
        elevation: 3,
    },
    botaoCadastrar: {
        backgroundColor: '#FFB7CE',
        width: '80%',
        paddingVertical: 12,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
        elevation: 3,
    },

    textoBotao: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 1,
    },

});