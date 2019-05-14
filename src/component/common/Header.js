import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, PixelRatio, Dimensions, Platform, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from 'res/colors.json';
import fonts from 'res/fonts.json';
const width = Dimensions.get('window').width;
import { Context } from '../Theme';

const calculateFontSize = (fontSize) => {
    if (width > 550) {
        return (fontSize * 2) / PixelRatio.getFontScale();
    } else {
        return fontSize / PixelRatio.getFontScale();
    }
}

const Header = (props) => {
    let c = useContext(Context);
    c = c || {};
    renderLeftIcon = () => {
        if (props.backEnabled) {
            return (
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[styles.iconView, styles.left]}
                    onPress={() => props.navigation.goBack()}>
                    <AntDesign name='arrowleft' size={26} color={c.textColor} />
                </TouchableOpacity>
            );
        } else if (props.left) {
            return (
                <View style={[styles.iconView, styles.left]}>
                    {props.left}
                </View>
            );
        } else { return null; }
    }

    renderRightIcon = () => {
        if (props.right) {
            return (
                <View style={[styles.iconView, styles.right,]}>
                    {props.right}
                </View>
            );
        } else { return null; }
    }

    return (
        <View style={[styles.container, props.style, { backgroundColor: c.bgLight }]}>
            <Text style={[styles.text, { color: c.textColor }]}>
                {props.children}
            </Text>
            {this.renderLeftIcon()}
            {this.renderRightIcon()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? 0 : 24,
        height: 56, left: 0, right: 0,
        backgroundColor: colors.backgroundColor,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconView: {
        position: 'absolute',
        height: 45,
        aspectRatio: 1,
        zIndex: 10,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    left: {
        left: 0,
        marginLeft: 5,
    },
    right: {
        right: 0,
        marginRight: 5,
    },
    text: {
        fontSize: calculateFontSize(16),
        fontWeight: '500',
        //fontFamily: fonts.title,
        color: colors.title
    }
});

export { Header };