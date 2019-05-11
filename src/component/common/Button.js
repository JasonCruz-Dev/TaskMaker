import React, { useContext } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import colors from 'res/colors.json';
import { Context } from '../Theme';
let c = useContext(Context);
const Button = (props) => {
    return (
        props.loading ?
            <TouchableOpacity style={[styles.buttonStyle, styles.loading]}>
                <ActivityIndicator color={colors.white} size='small' /><Text style={styles.textStyle}>wait</Text>
            </TouchableOpacity> :
            <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{props.children}</Text>
            </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        color: c.textColor || colors.white,
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    buttonStyle: {
        left: 0,
        right: 0,
        borderRadius: 30,
        backgroundColor: c.bgColor || colors.button,
        paddingVertical: 12,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        flexDirection: 'row',
        backgroundColor: colors.lightRed
    }
}

export { Button };