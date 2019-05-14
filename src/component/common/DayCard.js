import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from 'res/colors.json';
import { Context } from '../Theme';

const DayCard = (props) => {
    let c = useContext(Context);
    c = c || {};
    return (
        <View style={[styles.container, { backgroundColor: c.bgDark }]}>
            <Text style={[styles.dayText, { color: c.textColor }]}>{props.children}</Text>
            <TouchableOpacity onPress={props.onPress} style={styles.icon}>
                <Entypo name='plus' size={24} color={c.textColor || colors.red} />
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        elevation: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dayText: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.red
    },
    icon: {
        padding: 5
    }
}

export { DayCard };