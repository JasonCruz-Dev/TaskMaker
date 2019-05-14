import React, { useContext } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import colors from 'res/colors.json';
import { Context } from '../Theme';

const Button = (props) => {
    let c = useContext(Context);
    c = c || {};
    return (
        props.loading ?
            <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: c.bgDark || colors.red }]}>
                <ActivityIndicator color={c.textColor || colors.white} size='small' />
                <Text style={[styles.textStyle, { color: c.textColor || colors.white }]}>wait</Text>
            </TouchableOpacity> :
            <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle, { backgroundColor: c.bgDark || colors.button, }]}>
                <Text style={[styles.textStyle, { color: c.textColor || colors.white, }]}>{props.children}</Text>
            </TouchableOpacity >
    );
}

const styles = {
    textStyle: {
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    buttonStyle: {
        left: 0,
        right: 0,
        borderRadius: 30,
        paddingVertical: 12,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export { Button };