import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Context } from '../Theme';

const MoreOptionItem = (props) => {
    let c = useContext(Context);
    c = c || {};
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}>
            {props.icon}
            <Text style={[styles.text, { color: c.textColor }]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    container: {
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