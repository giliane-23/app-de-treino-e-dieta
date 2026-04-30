import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function MeusTreinos() {
    const diasDaSemana = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'] as const;
    type DiaDaSemana = typeof diasDaSemana[number];

    const [diaSelecionado, setDiaSelecionado] = useState<DiaDaSemana>('SEG');

    const treinospordia: Record<DiaDaSemana, { id: string; nome: string; series: string; musculo: string; }[]> = {
        SEG: [
            { id: '1', nome: 'Elevação Pelvica', series: '3x15', musculo: 'Glúteos/Posteiriores' },
            { id: '2', nome: 'Mesa Flexora', series: '3x15', musculo: 'Glúteos/Posteiriores' },
            { id: '3', nome: 'Leg Press (Pes altos)', series: '3x15', musculo: 'Glúteos/Posteiriores' },
            { id: '4', nome: 'Abdução', series: '3x15', musculo: 'Glúteos/Posteiriores' },
        ],
        TER: [{ id: '1', nome: 'Puxada Frente', series: '3x15', musculo: 'Superiores Completo' },
        { id: '2', nome: 'Remada Baixa ', series: '3x15', musculo: 'Superiores Completo' },
        { id: '3', nome: 'Supino Máquina', series: '3x15', musculo: 'Superiores Completo' },
        { id: '4', nome: 'Desenvolvimento com Alters', series: '3x15', musculo: 'Superiores Completo' },
        { id: '5', nome: 'Rosca Direta com Alters', series: '3x15', musculo: 'Superiores Completo' },
        { id: '6', nome: 'Triceps Pulldown', series: '3x15', musculo: 'Superiores Completo' },
        ],
        QUA: [{ id: '1', nome: 'Leg Press', series: '3x15', musculo: 'Quadriceps/Gluteo' },
        { id: '2', nome: 'Cadeira Extensora', series: '3x15', musculo: 'Quadriceps/Gluteo' },
        { id: '3', nome: 'Elevação Pelvica', series: '3x15', musculo: 'Quadriceps/Gluteo' },
        { id: '4', nome: 'Agachamento Sumô', series: '3x15', musculo: 'Quadriceps/Gluteo' },
        ],
        QUI: [{ id: '1', nome: ' Bi-set: Membros Sup. + 15 min Bike', series: '', musculo: 'Metabolico' }],
        SEX: [{ id: '1', nome: 'Aula de Jump', series: '30-60 min', musculo: 'Cardio' }],
    };

    const treinos = treinospordia[diaSelecionado];

    return (
        <SafeAreaView style={[styles.container, styles.background]}>
            <Text style={styles.titulo}>✨Treinos da Semana✨</Text>

            {/* DIAS DA SEMANA */}
            <View style={styles.containerDias}>
                {diasDaSemana.map((dia) => (
                    <TouchableOpacity
                        key={dia}
                        style={[
                            styles.dia,
                            diaSelecionado === dia && styles.diaSelecionado
                        ]}
                        onPress={() => setDiaSelecionado(dia)}
                    >
                        <Text style={styles.textoDia}>{dia}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* LISTA DE TREINOS */}
            <FlatList
                data={treinos}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={
                    <Text style={styles.vazio}>Nenhum treino para esse dia 💭</Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.cardTreino}>
                        <MaterialIcons name="fitness-center" size={24} color="#ff6fa5" />

                        <View style={styles.infoTreino}>
                            <Text style={styles.nomeExercicio}>{item.nome}</Text>
                            <Text style={styles.detalhes}>
                                {item.series} • {item.musculo}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    background: {
        backgroundColor: '#ffe1eb'
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ff6fa5',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,

    },

    containerDias: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20

    },

    dia: {
        backgroundColor: '#ffa7baa9',
        padding: 13,
        borderRadius: 20,
        width: 60,
        alignItems: 'center'

    },

    diaSelecionado: {
        backgroundColor: '#ff6fa5'
    },

    textoDia: {
        color: '#fff',
        fontWeight: 'bold'
    },

    cardTreino: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        marginBottom: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        alignSelf: 'center',
        width: '90%'
    },

    infoTreino: {
        marginLeft: 15
    },

    nomeExercicio: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    detalhes: {
        color: '#999'
    },

    vazio: {
        textAlign: 'center',
        color: '#fff',
        marginTop: 40
    }
});