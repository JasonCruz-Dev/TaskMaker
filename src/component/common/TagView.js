import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../res/colors';

const TagView = (props) => {
    return (
        <View style={styles.constainerStyle}>
            <Text style={styles.title}>{props.children}</Text>
            <Text style={styles.number}>{(!props.number || props.number === 0) ? 'NO ITEMS' : `${props.number} ITEMS`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    constainerStyle: {
        elevation: 1,
        flex: 1,
        padding: 10,
        borderWidth: StyleSheet.hairlineWidth
    },
    title: {
        fontSize: 14,
        color: colors.red
    },
    number: {
        fontSize: 12,
        color: colors.darkGrey
    }
});

export { TagView };