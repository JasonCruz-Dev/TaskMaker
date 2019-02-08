import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import colors from 'res/colors';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    buttonStyle: {
        left: 0,
        right: 0,
        borderRadius: 3,
        backgroundColor: colors.button,
        paddingVertical: 10,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Button };