import { StyleSheet, Text, View } from 'react-native';

export default function DietaScreen() { // O "export default" é obrigatório!
    return (
        <View style={styles.container}>
            <Text>Tela de Dieta em construção... 🥗</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffe1eb' }
});