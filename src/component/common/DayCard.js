import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from 'res/colors';

const DayCard = (props) => {
    return (
        <View style={styles.constainerStyle}>
            <Text style={styles.dayText}>{props.children}</Text>
            <TouchableOpacity onPress={props.onPress}>
                <Entypo name='plus' size={30} color={colors.red} />
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    constainerStyle: {
        elevation: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dayText: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.red,
    },
}

export { DayCard };