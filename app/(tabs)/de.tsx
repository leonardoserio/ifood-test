import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definindo o componente funcional com tipagem
const EmptyScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Esta é uma tela vazia</Text>
        </View>
    );
};

// Estilos da tela
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupar todo o espaço disponível
        justifyContent: 'center', // Centralizar verticalmente
        alignItems: 'center', // Centralizar horizontalmente
        backgroundColor: '#f0f0f0', // Cor de fundo clara
    },
    text: {
        fontSize: 18,
        color: '#333', // Cor do texto
    },
});

export default EmptyScreen;
