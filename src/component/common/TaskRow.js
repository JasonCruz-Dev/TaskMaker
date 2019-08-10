import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from 'res/colors.json';

const TaskRow = (props) => {
    markDone = () => {
        props.onMarkDone(props.task);
    }
    unMarkDone = () => {
        props.onUnmarkDone(props.task);
    }
    deleteTask = () => {
        props.onDelete(props.task);
    }
    return (
        <View style={styles.container}>
            {props.done ?
                <TouchableOpacity onPress={unMarkDone}>
                    <Ionicons name='ios-checkmark-circle' size={20} color={colors.grey} />
                </TouchableOpacity> :
                <TouchableOpacity onPress={markDone}>
                    <Ionicons name='ios-radio-button-off' size={20} color={colors.black} />
                </TouchableOpacity>}
            <Text style={[styles.rowText, props.done ? { textDecorationLine: 'line-through', color: colors.grey } : null]}>
                {props.children}
            </Text>
            {props.done ?
                <TouchableOpacity onPress={deleteTask}>
                    <Ionicons name='ios-close-circle' size={20} color={colors.grey} />
                </TouchableOpacity> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rowText: {
        fontSize: 15,
        color: colors.text,
        paddingHorizontal: 10,
        flex: 1,
    },
}
);

export { TaskRow };