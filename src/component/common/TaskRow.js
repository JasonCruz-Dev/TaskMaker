import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from 'res/colors';

const TaskRow = (props) => {
    return (
        <View style={styles.constainerStyle}>
            {props.done ?
                <TouchableOpacity onPress={props.onCheckPress}>
                    <Ionicons name='ios-checkmark-circle' size={24} color={colors.grey} />
                </TouchableOpacity> :
                <TouchableOpacity onPress={props.onPress}>
                    <Ionicons name='ios-radio-button-off' size={24} color={colors.black} />
                </TouchableOpacity>}
            <Text style={[styles.rowText, props.done ? { textDecorationLine: 'line-through', color: colors.grey } : null]}>{props.children}</Text>
            {props.done ?
                <TouchableOpacity onPress={props.onClose}>
                    <Ionicons name='ios-close-circle' size={24} color={colors.grey} />
                </TouchableOpacity> : null}
        </View>
    );
}

const styles = {
    constainerStyle: {
        elevation: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rowText: {
        fontSize: 18,
        color: colors.text,
        paddingHorizontal: 10,
        flex: 1,
        fontFamily: 'open-sans'
    },
}

export { TaskRow };