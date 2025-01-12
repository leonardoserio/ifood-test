import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Esta é uma tela vazia</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default EmptyScreen;
