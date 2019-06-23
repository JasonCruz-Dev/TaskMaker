import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import colors from 'res/colors.json';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={colors.red} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        elevation: 1,
        top: 0, bottom: 0,
        left: 0, right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
});

export { Loader };