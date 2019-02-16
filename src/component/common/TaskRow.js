import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from 'res/colors';

const TaskRow = (props) => {
    return (
        <View style={styles.constainerStyle}>
            <Text style={styles.rowText}>{props.children}</Text>
            <TouchableOpacity onPress={props.onPress}>
                <AntDesign name='closecircleo' size={24} color={colors.black} />
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    constainerStyle: {
        elevation: 1,
        paddingHorizontal: 10,
        paddingVertical: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowText: {
        fontSize: 18,
        color: colors.text,
    },
}

export { TaskRow };