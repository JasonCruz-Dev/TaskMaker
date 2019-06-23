import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { Context } from '../Theme';

const ActionButton = (props) => {
    let c = useContext(Context);
    c = c || {};
    return (
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: c.textColor }]}
            onPress={props.onPress}>
            <Entypo name='plus' size={30} color={c.bgLight} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    actionButton: {
        position: 'absolute',
        padding: 10,
        borderRadius: 30,
        bottom: 25, right: 25,
    }
});

export { ActionButton };