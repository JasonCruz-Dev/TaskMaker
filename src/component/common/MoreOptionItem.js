import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MoreOptionItem = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.constainerStyle}
            onPress={props.onPress}
        >
            {props.icon}
            <Text style={styles.text}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    constainerStyle: {
        left: 0, right: 0,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
    }
}

export { MoreOptionItem };