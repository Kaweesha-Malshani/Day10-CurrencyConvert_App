import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CurrencyConverter from './CurrencyConverter';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <CurrencyConverter />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
