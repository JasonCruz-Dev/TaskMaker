import React, { useRef } from 'react';
import { Text, TouchableOpacity, StyleSheet, Animated, PanResponder } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from 'res/colors.json';

const TaskRow = (props) => {
    const _panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderRelease: (event, { dx }) => {
            if (dx > 120) {
                markDone();
            }
            if (dx < 120) {
                unMarkDone();
            }
        }
    }));

    markDone = () => {
        props.onMarkDone(props.task);
    }
    unMarkDone = () => {
        props.onUnMarkDone(props.task);
    }
    deleteTask = () => {
        props.onDelete(props.task);
    }

    return (
        <Animated.View style={styles.container} {..._panResponder.current.panHandlers}>
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
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 1,
        margin: 5,
        padding: 5,
        backgroundColor: 'red',
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