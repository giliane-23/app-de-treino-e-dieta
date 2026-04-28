import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function MeusTreinos() {
    const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    const treinospordia = {
        'Segunda-feira': [
            { id: '1', nome: 'Agachamento Livre', series: '3x15', musculo: 'Quadríceps', video: 'https://youtube.com/...' },
            { id: '2', nome: 'Afundo', series: '3x12', musculo: 'Glúteos', video: 'https://youtube.com/...' },
        ],
    };

    const treinos = treinospordia['Segunda-feira'];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Meu Circuito de Hoje 🏋️‍♀️</Text>

            <FlatList
                data={treinos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardTreino}>
                        <MaterialIcons name="fitness-center" size={24} color="#9B6B9E" />
                        <View style={styles.infoTreino}>
                            <Text style={styles.nomeExercicio}>{item.nome}</Text>
                            <Text style={styles.detalhes}>{item.series} - {item.musculo}</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffe1eb', padding: 20 },
    titulo: { fontSize: 22, fontWeight: 'bold', color: '#9B6B9E', marginBottom: 20, textAlign: 'center', marginTop: 20 },
    cardTreino: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        alignItems: 'center',
        elevation: 2
    },
    infoTreino: { marginLeft: 15 },
    nomeExercicio: { fontSize: 16, fontWeight: 'bold', color: '#9B6B9E' },
    detalhes: { color: '#B58DB6' }
});