import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import colors from '../../res/colors.json';
import fonts from '../../res/fonts.json';

const ThemeChoose = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose theme</Text>
            <View style={styles.colorBox}>
                <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
                    <FontAwesome name='circle' size={24} color={colors.red} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
                    <FontAwesome name='circle' size={24} color={colors.green} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
                    <FontAwesome name='circle' size={24} color={colors.blue} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
                    <FontAwesome name='circle' size={24} color={colors.orange} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
                    <FontAwesome name='circle' size={24} color={colors.title} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    container: {
        elevation: 1,
        padding: 25,
        minWidth: 200,
        bordurRadius: 10,
        backgroundColor: colors.backgroundColor
    },
    colorBox: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    title: {
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: fonts.title
    }
}

export { ThemeChoose };